import { useState } from "react";
import { isAuthenticatedRequest } from "@/lib/admin-auth";

const AdminLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const json = await response.json().catch(() => ({}));
        setError(json.error || "Giris basarisiz.");
        return;
      }

      window.location.href = "/admin";
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-5">
      <div className="w-full max-w-[420px] bg-white border border-[#ddd] rounded-[10px] p-6">
        <h1 className="text-[24px] font-semibold text-[#222] mb-2">Admin Giris</h1>
        <p className="text-[14px] text-[#666] mb-5">
          Kullanici adi ve sifre `.env` icinden kontrol edilir.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Kullanici adi"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full h-[42px] border border-[#ccc] rounded px-3"
            required
          />
          <input
            type="password"
            placeholder="Sifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[42px] border border-[#ccc] rounded px-3"
            required
          />
          {error && <p className="text-[13px] text-[#b91c1c]">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-[42px] rounded bg-[#111] text-white font-medium disabled:opacity-60"
          >
            {loading ? "Giris yapiliyor..." : "Giris yap"}
          </button>
        </form>
      </div>
    </main>
  );
};

export async function getServerSideProps({ req }) {
  if (isAuthenticatedRequest(req)) {
    return {
      redirect: { destination: "/admin", permanent: false },
    };
  }

  return { props: {} };
}

export default AdminLoginPage;
