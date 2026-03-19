import { useState } from "react";
import { isAuthenticatedRequest } from "@/lib/admin-auth";
import { getSiteData } from "@/lib/site-data-store";

const AdminPage = ({ initialJson }) => {
  const [jsonText, setJsonText] = useState(initialJson);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setMessage("");
    setSaving(true);

    try {
      let parsed;
      try {
        parsed = JSON.parse(jsonText);
      } catch (error) {
        setMessage("JSON formati hatali.");
        return;
      }

      const response = await fetch("/api/site-data", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: parsed }),
      });

      if (!response.ok) {
        const json = await response.json().catch(() => ({}));
        setMessage(json.error || "Kaydetme basarisiz.");
        return;
      }

      setMessage("Kaydedildi.");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  };

  return (
    <main className="min-h-screen bg-[#f5f5f5] p-5">
      <div className="max-w-[1100px] mx-auto bg-white border border-[#ddd] rounded-[10px] p-5">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-[24px] font-semibold text-[#222]">Site Data Admin</h1>
          <button
            type="button"
            onClick={handleLogout}
            className="h-[38px] px-4 rounded border border-[#ccc] text-[14px]"
          >
            Cikis
          </button>
        </div>

        <p className="text-[14px] text-[#666] mb-3">
          Asagidaki JSON, Neon Postgres icindeki `site_data.payload` alanina yazilir.
        </p>

        <textarea
          value={jsonText}
          onChange={(e) => setJsonText(e.target.value)}
          className="w-full min-h-[520px] border border-[#ccc] rounded p-3 font-mono text-[13px]"
        />

        <div className="mt-4 flex items-center gap-3">
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="h-[42px] px-5 rounded bg-[#111] text-white font-medium disabled:opacity-60"
          >
            {saving ? "Kaydediliyor..." : "Kaydet"}
          </button>
          {message && <p className="text-[14px] text-[#333]">{message}</p>}
        </div>
      </div>
    </main>
  );
};

export async function getServerSideProps({ req }) {
  if (!isAuthenticatedRequest(req)) {
    return {
      redirect: { destination: "/admin/login", permanent: false },
    };
  }

  try {
    const data = await getSiteData();
    return {
      props: {
        initialJson: JSON.stringify(data, null, 2),
      },
    };
  } catch (error) {
    return {
      props: {
        initialJson: "{}",
      },
    };
  }
}

export default AdminPage;
