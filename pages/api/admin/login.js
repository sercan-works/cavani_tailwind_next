import {
  isValidAdminEnv,
  setSessionCookie,
  validateCredentials,
} from "@/lib/admin-auth";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!isValidAdminEnv()) {
    return res.status(500).json({ error: "Admin env variables are missing" });
  }

  const { username, password } = req.body || {};
  if (!validateCredentials(username, password)) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  setSessionCookie(res);
  return res.status(200).json({ ok: true });
}
