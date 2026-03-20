import { useMemo, useState } from "react";
import { isAuthenticatedRequest } from "@/lib/admin-auth";
import { getSiteData } from "@/lib/site-data-store";

const moveRow = (arr, from, to) => {
  if (to < 0 || to >= arr.length || from === to) return arr;
  const next = [...arr];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
};

const AdminPage = ({ initialData, initialError }) => {
  const safeInitial = useMemo(() => {
    return (
      initialData || {
        hero: { prefix: "", rotatingStrings: [] },
        about: { title: "", bio: [], motto: "" },
        music: [],
        portfolio: [],
        timeline: [],
      }
    );
  }, [initialData]);

  const [activeTab, setActiveTab] = useState("hero");

  const [hero, setHero] = useState(safeInitial.hero);
  const [about, setAbout] = useState(safeInitial.about);
  const [music, setMusic] = useState(safeInitial.music);
  const [portfolio, setPortfolio] = useState(safeInitial.portfolio);
  const [timeline, setTimeline] = useState(safeInitial.timeline);

  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setMessage("");
    setSaving(true);

    try {
      const payload = {
        hero: {
          prefix: hero?.prefix || "",
          rotatingStrings: Array.isArray(hero?.rotatingStrings)
            ? hero.rotatingStrings
            : [],
        },
        about: {
          title: about?.title || "",
          bio: Array.isArray(about?.bio) ? about.bio : [],
          motto: about?.motto || "",
        },
        music: (Array.isArray(music) ? music : []).map((item) => ({
          id: item?.id,
          title: item?.title || "",
          youtubeUrl: item?.youtubeUrl || "",
        })),
        portfolio: (Array.isArray(portfolio) ? portfolio : []).map((item) => ({
          id: item?.id,
          title: item?.title || "",
          platform: item?.platform || "",
          url: item?.url || "",
          cover: item?.cover || "",
        })),
        timeline: (Array.isArray(timeline) ? timeline : []).map((item) => ({
          id: item?.id,
          title: item?.title || "",
          releaseDate: item?.releaseDate || "",
          platform: item?.platform || "",
          url: item?.url || "",
          cover: item?.cover || "",
          description: item?.description || "",
        })),
      };

      const response = await fetch("/api/site-data", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: payload }),
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
    <main className="min-h-screen bg-slate-50 p-5">
      <div className="max-w-[1200px] mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
          <div>
            <h1 className="text-[22px] font-semibold text-slate-900">Site Data Admin</h1>
            <p className="text-[13px] text-slate-500 mt-1">
              Neon Postgres'e kaydetmek icin tabloları düzenleyin.
            </p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="h-[40px] px-4 rounded-xl bg-slate-900 text-white text-[14px] hover:bg-slate-800 transition-colors"
          >
            Cikis
          </button>
        </div>

        {initialError ? (
          <p className="text-[14px] text-[#b91c1c] mb-3 whitespace-pre-wrap">
            {initialError}
          </p>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-[240px,1fr] gap-4">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 sticky top-[90px] self-start">
            <div className="text-[12px] uppercase tracking-[.12em] text-slate-500 px-2 mb-2 font-semibold">
              Menüler
            </div>
            {[
              ["hero", "Hero"],
              ["about", "Hakkımızda"],
              ["music", "Müzik"],
              ["portfolio", "Portfolio"],
              ["timeline", "Kronoloji"],
            ].map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`w-full text-left px-3 py-2 rounded-xl mb-2 border transition-all ${
                  activeTab === key
                    ? "bg-slate-900 border-slate-900 text-white"
                    : "bg-transparent border-transparent text-slate-600 hover:bg-white hover:border-slate-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4">
            {activeTab === "hero" ? (
              <div>
                <div className="mb-3">
                  <label className="text-[13px] text-[#555]">Prefix</label>
                  <input
                    className="w-full h-[42px] mt-1 border border-slate-200 rounded-xl px-3 bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                    value={hero?.prefix || ""}
                    onChange={(e) =>
                      setHero((prev) => ({
                        ...(prev || {}),
                        prefix: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between mb-2 gap-3">
                  <div className="text-[13px] text-[#555] font-semibold">
                    Rotating Strings
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setHero((prev) => ({
                        ...(prev || {}),
                        rotatingStrings: [
                          ...(prev?.rotatingStrings || []),
                          "",
                        ],
                      }))
                    }
                    className="h-[34px] px-3 rounded bg-[#111] text-white text-[13px] hover:bg-[#000]"
                  >
                    Ekle
                  </button>
                </div>

                <div className="overflow-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-100 border-b border-slate-200">
                      <tr>
                        <th className="p-3 w-[70px]">#</th>
                        <th className="p-3">Metin</th>
                        <th className="p-3 w-[170px]">İşlemler</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(hero?.rotatingStrings || []).map((s, idx) => (
                        <tr key={`${idx}`} className="hover:bg-slate-50">
                          <td className="p-3">{idx + 1}</td>
                          <td className="p-3">
                            <input
                              className="w-full h-[38px] border border-slate-200 rounded-xl px-3 bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                              value={s}
                              onChange={(e) =>
                                setHero((prev) => {
                                  const next = [...(prev?.rotatingStrings || [])];
                                  next[idx] = e.target.value;
                                  return { ...(prev || {}), rotatingStrings: next };
                                })
                              }
                            />
                          </td>
                          <td className="p-3">
                            <div className="flex flex-wrap gap-2">
                              <button
                                type="button"
                                onClick={() =>
                                  setHero((prev) => ({
                                    ...(prev || {}),
                                    rotatingStrings: moveRow(
                                      prev?.rotatingStrings || [],
                                      idx,
                                      idx - 1
                                    ),
                                  }))
                                }
                                className="h-[34px] px-2 rounded-xl border border-slate-200 text-[12px] text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent"
                                disabled={idx === 0}
                              >
                                Yukarı
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  setHero((prev) => ({
                                    ...(prev || {}),
                                    rotatingStrings: moveRow(
                                      prev?.rotatingStrings || [],
                                      idx,
                                      idx + 1
                                    ),
                                  }))
                                }
                                className="h-[34px] px-2 rounded-xl border border-slate-200 text-[12px] text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent"
                                disabled={idx === (hero?.rotatingStrings?.length || 0) - 1}
                              >
                                Aşağı
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  setHero((prev) => {
                                    const next = [...(prev?.rotatingStrings || [])];
                                    next.splice(idx, 1);
                                    return { ...(prev || {}), rotatingStrings: next };
                                  })
                                }
                                className="h-[34px] px-2 rounded-xl border border-slate-200 text-[12px] text-rose-700 hover:bg-rose-50"
                              >
                                Sil
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {(hero?.rotatingStrings || []).length === 0 ? (
                        <tr>
                          <td className="p-4 text-[#666]" colSpan={3}>
                            Kayıt yok
                          </td>
                        </tr>
                      ) : null}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : null}

            {activeTab === "about" ? (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="text-[13px] text-[#555]">Başlık</label>
                    <input
                      className="w-full h-[42px] mt-1 border border-slate-200 rounded-xl px-3 bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                      value={about?.title || ""}
                      onChange={(e) =>
                        setAbout((prev) => ({
                          ...(prev || {}),
                          title: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <label className="text-[13px] text-[#555]">Motto</label>
                    <input
                      className="w-full h-[42px] mt-1 border border-slate-200 rounded-xl px-3 bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                      value={about?.motto || ""}
                      onChange={(e) =>
                        setAbout((prev) => ({
                          ...(prev || {}),
                          motto: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2 gap-3">
                  <div className="text-[13px] text-[#555] font-semibold">Bio</div>
                  <button
                    type="button"
                    onClick={() =>
                      setAbout((prev) => ({
                        ...(prev || {}),
                        bio: [...(prev?.bio || []), ""],
                      }))
                    }
                    className="h-[34px] px-3 rounded bg-[#111] text-white text-[13px] hover:bg-[#000]"
                  >
                    Ekle
                  </button>
                </div>

                <div className="overflow-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-100 border-b border-slate-200">
                      <tr>
                        <th className="p-3 w-[70px]">#</th>
                        <th className="p-3">Metin</th>
                        <th className="p-3 w-[170px]">İşlemler</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(about?.bio || []).map((s, idx) => (
                        <tr key={`${idx}`} className="hover:bg-slate-50">
                          <td className="p-3">{idx + 1}</td>
                          <td className="p-3">
                            <input
                              className="w-full h-[38px] border border-slate-200 rounded-xl px-3 bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                              value={s}
                              onChange={(e) =>
                                setAbout((prev) => {
                                  const next = [...(prev?.bio || [])];
                                  next[idx] = e.target.value;
                                  return { ...(prev || {}), bio: next };
                                })
                              }
                            />
                          </td>
                          <td className="p-3">
                            <div className="flex flex-wrap gap-2">
                              <button
                                type="button"
                                onClick={() =>
                                  setAbout((prev) => ({
                                    ...(prev || {}),
                                    bio: moveRow(prev?.bio || [], idx, idx - 1),
                                  }))
                                }
                                className="h-[34px] px-2 rounded-xl border border-slate-200 text-[12px] text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent"
                                disabled={idx === 0}
                              >
                                Yukarı
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  setAbout((prev) => ({
                                    ...(prev || {}),
                                    bio: moveRow(prev?.bio || [], idx, idx + 1),
                                  }))
                                }
                                className="h-[34px] px-2 rounded-xl border border-slate-200 text-[12px] text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent"
                                disabled={idx === (about?.bio?.length || 0) - 1}
                              >
                                Aşağı
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  setAbout((prev) => {
                                    const next = [...(prev?.bio || [])];
                                    next.splice(idx, 1);
                                    return { ...(prev || {}), bio: next };
                                  })
                                }
                                className="h-[34px] px-2 rounded-xl border border-slate-200 text-[12px] text-rose-700 hover:bg-rose-50"
                              >
                                Sil
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {(about?.bio || []).length === 0 ? (
                        <tr>
                          <td className="p-4 text-[#666]" colSpan={3}>
                            Kayıt yok
                          </td>
                        </tr>
                      ) : null}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : null}

            {activeTab === "music" ? (
              <div>
                <div className="flex items-center justify-between mb-2 gap-3">
                  <h3 className="text-[14px] font-semibold text-[#222]">
                    Müzik
                  </h3>
                  <button
                    type="button"
                    onClick={() =>
                      setMusic((prev) => [
                        ...(prev || []),
                        { id: undefined, title: "", youtubeUrl: "" },
                      ])
                    }
                    className="h-[34px] px-3 rounded-xl bg-slate-900 text-white text-[13px] hover:bg-slate-800"
                  >
                    Yeni Kayıt
                  </button>
                </div>

                <div className="overflow-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-100 border-b border-slate-200">
                      <tr>
                        <th className="p-3 w-[70px]">Sıra</th>
                        <th className="p-3 w-[70px]">ID</th>
                        <th className="p-3">Başlık</th>
                        <th className="p-3">YouTube URL</th>
                        <th className="p-3 w-[170px]">İşlemler</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(music || []).map((row, idx) => (
                        <tr
                          key={`${row?.id ?? idx}-${idx}`}
                          className="hover:bg-slate-50"
                        >
                          <td className="p-3">{idx + 1}</td>
                          <td className="p-3 text-[#666]">{row?.id ?? idx + 1}</td>
                          <td className="p-3">
                            <input
                              className="w-full h-[38px] border border-slate-200 rounded-xl px-3 bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                              value={row?.title || ""}
                              onChange={(e) => {
                                const v = e.target.value;
                                setMusic((prev) => {
                                  const next = [...(prev || [])];
                                  next[idx] = { ...(next[idx] || {}), title: v };
                                  return next;
                                });
                              }}
                            />
                          </td>
                          <td className="p-3">
                            <input
                              className="w-full h-[38px] border border-slate-200 rounded-xl px-3 bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                              value={row?.youtubeUrl || ""}
                              onChange={(e) => {
                                const v = e.target.value;
                                setMusic((prev) => {
                                  const next = [...(prev || [])];
                                  next[idx] = {
                                    ...(next[idx] || {}),
                                    youtubeUrl: v,
                                  };
                                  return next;
                                });
                              }}
                            />
                          </td>
                          <td className="p-3">
                            <div className="flex flex-wrap gap-2">
                              <button
                                type="button"
                                onClick={() => setMusic((prev) => moveRow(prev || [], idx, idx - 1))}
                                className="h-[34px] px-2 rounded-xl border border-slate-200 text-[12px] text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent"
                                disabled={idx === 0}
                              >
                                Yukarı
                              </button>
                              <button
                                type="button"
                                onClick={() => setMusic((prev) => moveRow(prev || [], idx, idx + 1))}
                                className="h-[34px] px-2 rounded-xl border border-slate-200 text-[12px] text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent"
                                disabled={idx === (music || []).length - 1}
                              >
                                Aşağı
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  setMusic((prev) => {
                                    const next = [...(prev || [])];
                                    next.splice(idx, 1);
                                    return next;
                                  })
                                }
                                className="h-[34px] px-2 rounded-xl border border-slate-200 text-[12px] text-rose-700 hover:bg-rose-50"
                              >
                                Sil
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {(music || []).length === 0 ? (
                        <tr>
                          <td className="p-4 text-[#666]" colSpan={5}>
                            Kayıt yok
                          </td>
                        </tr>
                      ) : null}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : null}

            {activeTab === "portfolio" ? (
              <div>
                <div className="flex items-center justify-between mb-2 gap-3">
                  <h3 className="text-[14px] font-semibold text-[#222]">
                    Portfolio
                  </h3>
                  <button
                    type="button"
                    onClick={() =>
                      setPortfolio((prev) => [
                        ...(prev || []),
                        {
                          id: undefined,
                          title: "",
                          platform: "",
                          url: "",
                          cover: "",
                        },
                      ])
                    }
                    className="h-[34px] px-3 rounded-xl bg-slate-900 text-white text-[13px] hover:bg-slate-800"
                  >
                    Yeni Kayıt
                  </button>
                </div>

                <div className="overflow-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-100 border-b border-slate-200">
                      <tr>
                        <th className="p-3 w-[70px]">Sıra</th>
                        <th className="p-3 w-[70px]">ID</th>
                        <th className="p-3">Başlık</th>
                        <th className="p-3 w-[120px]">Platform</th>
                        <th className="p-3">URL</th>
                        <th className="p-3 w-[170px]">Cover</th>
                        <th className="p-3 w-[170px]">İşlemler</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(portfolio || []).map((row, idx) => (
                        <tr
                          key={`${row?.id ?? idx}-${idx}`}
                          className="hover:bg-slate-50"
                        >
                          <td className="p-3">{idx + 1}</td>
                          <td className="p-3 text-[#666]">{row?.id ?? idx + 1}</td>
                          <td className="p-3">
                            <input
                              className="w-full h-[38px] border border-slate-200 rounded-xl px-3 bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                              value={row?.title || ""}
                              onChange={(e) => {
                                const v = e.target.value;
                                setPortfolio((prev) => {
                                  const next = [...(prev || [])];
                                  next[idx] = { ...(next[idx] || {}), title: v };
                                  return next;
                                });
                              }}
                            />
                          </td>
                          <td className="p-3">
                            <input
                              className="w-full h-[38px] border border-slate-200 rounded-xl px-3 bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                              value={row?.platform || ""}
                              onChange={(e) => {
                                const v = e.target.value;
                                setPortfolio((prev) => {
                                  const next = [...(prev || [])];
                                  next[idx] = {
                                    ...(next[idx] || {}),
                                    platform: v,
                                  };
                                  return next;
                                });
                              }}
                            />
                          </td>
                          <td className="p-3">
                            <input
                              className="w-full h-[38px] border border-slate-200 rounded-xl px-3 bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                              value={row?.url || ""}
                              onChange={(e) => {
                                const v = e.target.value;
                                setPortfolio((prev) => {
                                  const next = [...(prev || [])];
                                  next[idx] = { ...(next[idx] || {}), url: v };
                                  return next;
                                });
                              }}
                            />
                          </td>
                          <td className="p-3">
                            <input
                              className="w-full h-[38px] border border-slate-200 rounded-xl px-3 bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                              value={row?.cover || ""}
                              onChange={(e) => {
                                const v = e.target.value;
                                setPortfolio((prev) => {
                                  const next = [...(prev || [])];
                                  next[idx] = { ...(next[idx] || {}), cover: v };
                                  return next;
                                });
                              }}
                            />
                          </td>
                          <td className="p-3">
                            <div className="flex flex-wrap gap-2">
                              <button
                                type="button"
                                onClick={() =>
                                  setPortfolio((prev) => moveRow(prev || [], idx, idx - 1))
                                }
                                className="h-[34px] px-2 rounded-xl border border-slate-200 text-[12px] text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent"
                                disabled={idx === 0}
                              >
                                Yukarı
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  setPortfolio((prev) => moveRow(prev || [], idx, idx + 1))
                                }
                                className="h-[34px] px-2 rounded-xl border border-slate-200 text-[12px] text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent"
                                disabled={idx === (portfolio || []).length - 1}
                              >
                                Aşağı
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  setPortfolio((prev) => {
                                    const next = [...(prev || [])];
                                    next.splice(idx, 1);
                                    return next;
                                  })
                                }
                                className="h-[34px] px-2 rounded-xl border border-slate-200 text-[12px] text-rose-700 hover:bg-rose-50"
                              >
                                Sil
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {(portfolio || []).length === 0 ? (
                        <tr>
                          <td className="p-4 text-[#666]" colSpan={7}>
                            Kayıt yok
                          </td>
                        </tr>
                      ) : null}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : null}

            {activeTab === "timeline" ? (
              <div>
                <div className="flex items-center justify-between mb-2 gap-3">
                  <h3 className="text-[14px] font-semibold text-[#222]">
                    Kronoloji
                  </h3>
                  <button
                    type="button"
                    onClick={() =>
                      setTimeline((prev) => [
                        ...(prev || []),
                        {
                          id: undefined,
                          title: "",
                          releaseDate: "",
                          platform: "",
                          url: "",
                          cover: "",
                          description: "",
                        },
                      ])
                    }
                    className="h-[34px] px-3 rounded-xl bg-slate-900 text-white text-[13px] hover:bg-slate-800"
                  >
                    Yeni Kayıt
                  </button>
                </div>

                <div className="overflow-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-100 border-b border-slate-200">
                      <tr>
                        <th className="p-3 w-[70px]">Sıra</th>
                        <th className="p-3 w-[70px]">ID</th>
                        <th className="p-3">Başlık</th>
                        <th className="p-3 w-[120px]">Tarih</th>
                        <th className="p-3 w-[120px]">Platform</th>
                        <th className="p-3">URL</th>
                        <th className="p-3 w-[170px]">Cover</th>
                        <th className="p-3">Açıklama</th>
                        <th className="p-3 w-[170px]">İşlemler</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(timeline || []).map((row, idx) => (
                        <tr
                          key={`${row?.id ?? idx}-${idx}`}
                          className="hover:bg-slate-50"
                        >
                          <td className="p-3">{idx + 1}</td>
                          <td className="p-3 text-[#666]">{row?.id ?? idx + 1}</td>
                          <td className="p-3">
                            <input
                              className="w-full h-[38px] border border-slate-200 rounded-xl px-3 bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                              value={row?.title || ""}
                              onChange={(e) => {
                                const v = e.target.value;
                                setTimeline((prev) => {
                                  const next = [...(prev || [])];
                                  next[idx] = { ...(next[idx] || {}), title: v };
                                  return next;
                                });
                              }}
                            />
                          </td>
                          <td className="p-3">
                            <input
                              className="w-full h-[38px] border border-slate-200 rounded-xl px-3 bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                              value={row?.releaseDate || ""}
                              onChange={(e) => {
                                const v = e.target.value;
                                setTimeline((prev) => {
                                  const next = [...(prev || [])];
                                  next[idx] = {
                                    ...(next[idx] || {}),
                                    releaseDate: v,
                                  };
                                  return next;
                                });
                              }}
                            />
                          </td>
                          <td className="p-3">
                            <input
                              className="w-full h-[38px] border border-slate-200 rounded-xl px-3 bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                              value={row?.platform || ""}
                              onChange={(e) => {
                                const v = e.target.value;
                                setTimeline((prev) => {
                                  const next = [...(prev || [])];
                                  next[idx] = {
                                    ...(next[idx] || {}),
                                    platform: v,
                                  };
                                  return next;
                                });
                              }}
                            />
                          </td>
                          <td className="p-3">
                            <input
                              className="w-full h-[38px] border border-slate-200 rounded-xl px-3 bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                              value={row?.url || ""}
                              onChange={(e) => {
                                const v = e.target.value;
                                setTimeline((prev) => {
                                  const next = [...(prev || [])];
                                  next[idx] = { ...(next[idx] || {}), url: v };
                                  return next;
                                });
                              }}
                            />
                          </td>
                          <td className="p-3">
                            <input
                              className="w-full h-[38px] border border-slate-200 rounded-xl px-3 bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                              value={row?.cover || ""}
                              onChange={(e) => {
                                const v = e.target.value;
                                setTimeline((prev) => {
                                  const next = [...(prev || [])];
                                  next[idx] = { ...(next[idx] || {}), cover: v };
                                  return next;
                                });
                              }}
                            />
                          </td>
                          <td className="p-3">
                            <input
                              className="w-full h-[38px] border border-slate-200 rounded-xl px-3 bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                              value={row?.description || ""}
                              onChange={(e) => {
                                const v = e.target.value;
                                setTimeline((prev) => {
                                  const next = [...(prev || [])];
                                  next[idx] = {
                                    ...(next[idx] || {}),
                                    description: v,
                                  };
                                  return next;
                                });
                              }}
                            />
                          </td>
                          <td className="p-3">
                            <div className="flex flex-wrap gap-2">
                              <button
                                type="button"
                                onClick={() =>
                                  setTimeline((prev) => moveRow(prev || [], idx, idx - 1))
                                }
                                className="h-[34px] px-2 rounded-xl border border-slate-200 text-[12px] text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent"
                                disabled={idx === 0}
                              >
                                Yukarı
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  setTimeline((prev) => moveRow(prev || [], idx, idx + 1))
                                }
                                className="h-[34px] px-2 rounded-xl border border-slate-200 text-[12px] text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent"
                                disabled={idx === (timeline || []).length - 1}
                              >
                                Aşağı
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  setTimeline((prev) => {
                                    const next = [...(prev || [])];
                                    next.splice(idx, 1);
                                    return next;
                                  })
                                }
                                className="h-[34px] px-2 rounded-xl border border-slate-200 text-[12px] text-rose-700 hover:bg-rose-50"
                              >
                                Sil
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {(timeline || []).length === 0 ? (
                        <tr>
                          <td className="p-4 text-[#666]" colSpan={9}>
                            Kayıt yok
                          </td>
                        </tr>
                      ) : null}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="h-[42px] px-5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 disabled:opacity-60 disabled:hover:bg-slate-900 transition-colors shadow-sm"
          >
            {saving ? "Kaydediliyor..." : "Kaydet"}
          </button>
          {message ? (
            <p className="text-[14px] text-slate-700">{message}</p>
          ) : (
            <div />
          )}
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
        initialData: data,
      },
    };
  } catch (error) {
    return {
      props: {
        initialData: null,
        initialError: error?.message || "Admin sayfası veri çekemedi.",
      },
    };
  }
}

export default AdminPage;
