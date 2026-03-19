import fs from "fs";
import path from "path";
import { getPool } from "./db";

const TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS site_data (
    id SMALLINT PRIMARY KEY DEFAULT 1,
    payload JSONB NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT single_row CHECK (id = 1)
  );
`;

const seedFromFile = () => {
  const filePath = path.join(process.cwd(), "data", "site.json");
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
};

const ensureRow = async () => {
  const pool = getPool();
  await pool.query(TABLE_SQL);

  const existing = await pool.query("SELECT payload FROM site_data WHERE id = 1;");
  if (existing.rows.length > 0) return existing.rows[0].payload;

  const seeded = seedFromFile();
  await pool.query(
    "INSERT INTO site_data (id, payload, updated_at) VALUES (1, $1::jsonb, NOW());",
    [JSON.stringify(seeded)]
  );
  return seeded;
};

export const getSiteData = async () => {
  return ensureRow();
};

export const updateSiteData = async (payload) => {
  const pool = getPool();
  await pool.query(TABLE_SQL);
  await pool.query(
    `
      INSERT INTO site_data (id, payload, updated_at)
      VALUES (1, $1::jsonb, NOW())
      ON CONFLICT (id)
      DO UPDATE SET payload = EXCLUDED.payload, updated_at = NOW();
    `,
    [JSON.stringify(payload)]
  );
  return payload;
};
