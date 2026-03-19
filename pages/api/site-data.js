import { getSiteData, updateSiteData } from "@/lib/site-data-store";
import { isAuthenticatedRequest } from "@/lib/admin-auth";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const data = await getSiteData();
      return res.status(200).json({ data });
    }

    if (req.method === "PUT") {
      if (!isAuthenticatedRequest(req)) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const payload = req.body?.data;
      if (!payload || typeof payload !== "object") {
        return res.status(400).json({ error: "Invalid payload" });
      }

      const saved = await updateSiteData(payload);
      return res.status(200).json({ data: saved });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    return res.status(500).json({ error: error.message || "Server error" });
  }
}
