import { useMemo, useState } from "react";
import { isAuthenticatedRequest } from "@/lib/admin-auth";
import { getSiteData } from "@/lib/site-data-store";
import Layout from "@/src/layout/Layout";

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
    <Layout>
      <div className="cavani_tm_mainpart absolute inset-[70px] overflow-hidden middle:inset-x-0 middle:bottom-0 middle:top-[55px]">
        <div className="author_image absolute top-0 left-0 bottom-0 w-[40%] z-[15] middle:hidden">
          <div
            className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
            data-img-url="assets/img/about/1.jpg"
          />
        </div>

        <div className="main_content absolute top-0 right-0 bottom-0 w-[60%] middle:w-full">
          <main className="h-full overflow-y-auto px-4 sm:px-6 py-6">
      <div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-3xl shadow-lg p-6 sm:p-8 transition-all">
        <div className="flex items-start sm:items-center justify-between mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-slate-200">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              <span className="inline-flex items-center gap-2">
                <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">Site Data Admin</span>
                <span className="inline-block ml-2 animate-bounce text-indigo-400">🛠️</span>
              </span>
            </h1>
    
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-2 h-[42px] px-4 sm:px-6 rounded-lg bg-gradient-to-r from-slate-900 to-indigo-700 text-white text-base font-medium shadow-md hover:from-slate-800 hover:to-indigo-600 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span> Çıkış
          </button>
        </div>

        {initialError ? (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 whitespace-pre-wrap">
            {initialError}
          </div>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-[260px,1fr] gap-4 sm:gap-6">
          <aside className="bg-gradient-to-br from-indigo-50 to-slate-50 border border-slate-200 rounded-2xl py-4 px-3 md:sticky md:top-[95px] self-start shadow-sm">
            <div className="text-xs uppercase tracking-wider text-slate-500 px-2 mb-3 font-semibold select-none">
              Menüler
            </div>
            <nav className="flex flex-col gap-3 overflow-y-auto max-h-[calc(100vh-220px)]">
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
                  className={`w-full text-left px-3 py-2 bg-black text-white rounded-lg text-[13px] sm:text-[15px] font-medium shadow-md transition-all hover:bg-slate-900 outline-none`}
                >
                  {label}
                </button>
              ))}
            </nav>
          </aside>

          <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-inner">
            {activeTab === "hero" ? (
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-800">Prefix</label>
                  <input
                    className="mt-1 w-full h-[44px] border border-slate-200 rounded-lg px-4 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 text-[15px] transition-all"
                    value={hero?.prefix || ""}
                    onChange={(e) =>
                      setHero((prev) => ({
                        ...(prev || {}),
                        prefix: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between mb-3 gap-3">
                  <div className="text-sm text-indigo-700 font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">refresh</span>
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
                    className="h-[36px] px-4 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-500 text-white text-sm font-medium hover:from-indigo-500 hover:to-violet-400 shadow transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  >
                    <span className="material-symbols-outlined text-sm align-middle">add</span> Ekle
                  </button>
                </div>

                <div className="overflow-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-indigo-50 border-b border-slate-200">
                      <tr>
                        <th className="p-3 w-[70px] text-indigo-700 font-semibold">#</th>
                        <th className="p-3 text-indigo-700 font-semibold">Metin</th>
                        <th className="p-3 w-[170px] text-indigo-700 font-semibold">İşlemler</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(hero?.rotatingStrings || []).map((s, idx) => (
                        <tr key={`${idx}`} className="hover:bg-indigo-50 transition-colors">
                          <td className="p-3">{idx + 1}</td>
                          <td className="p-3">
                            <input
                              className="w-full h-[38px] border border-slate-200 rounded-lg px-3 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
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
                                className="h-[34px] px-2 rounded-lg border border-slate-200 text-xs text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent transition-all"
                                disabled={idx === 0}
                                title="Yukarı"
                              >
                                <span className="material-symbols-outlined text-base">arrow_upward</span>
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
                                className="h-[34px] px-2 rounded-lg border border-slate-200 text-xs text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent transition-all"
                                disabled={idx === (hero?.rotatingStrings?.length || 0) - 1}
                                title="Aşağı"
                              >
                                <span className="material-symbols-outlined text-base">arrow_downward</span>
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
                                className="h-[34px] px-2 rounded-lg border border-rose-200 text-xs text-rose-700 hover:bg-rose-50 transition-all"
                                title="Sil"
                              >
                                <span className="material-symbols-outlined text-base">delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {(hero?.rotatingStrings || []).length === 0 ? (
                        <tr>
                          <td className="p-4 text-slate-400 text-center" colSpan={3}>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-800">Başlık</label>
                    <input
                      className="w-full h-[44px] mt-1 border border-slate-200 rounded-lg px-4 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 text-[15px] transition-all"
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
                    <label className="block text-sm font-medium text-slate-800">Motto</label>
                    <input
                      className="w-full h-[44px] mt-1 border border-slate-200 rounded-lg px-4 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 text-[15px] transition-all"
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

                <div className="flex items-center justify-between mb-3 gap-3">
                  <div className="text-sm text-indigo-700 font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">article</span>
                    Bio
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setAbout((prev) => ({
                        ...(prev || {}),
                        bio: [...(prev?.bio || []), ""],
                      }))
                    }
                    className="h-[36px] px-4 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-500 text-white text-sm font-medium hover:from-indigo-500 hover:to-violet-400 shadow transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  >
                    <span className="material-symbols-outlined text-sm align-middle">add</span> Ekle
                  </button>
                </div>

                <div className="overflow-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-indigo-50 border-b border-slate-200">
                      <tr>
                        <th className="p-3 w-[70px] text-indigo-700 font-semibold">#</th>
                        <th className="p-3 text-indigo-700 font-semibold">Metin</th>
                        <th className="p-3 w-[170px] text-indigo-700 font-semibold">İşlemler</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(about?.bio || []).map((s, idx) => (
                        <tr key={`${idx}`} className="hover:bg-indigo-50 transition-colors">
                          <td className="p-3">{idx + 1}</td>
                          <td className="p-3">
                            <input
                              className="w-full h-[38px] border border-slate-200 rounded-lg px-3 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
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
                                className="h-[34px] px-2 rounded-lg border border-slate-200 text-xs text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent transition-all"
                                disabled={idx === 0}
                                title="Yukarı"
                              >
                                <span className="material-symbols-outlined text-base">arrow_upward</span>
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  setAbout((prev) => ({
                                    ...(prev || {}),
                                    bio: moveRow(prev?.bio || [], idx, idx + 1),
                                  }))
                                }
                                className="h-[34px] px-2 rounded-lg border border-slate-200 text-xs text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent transition-all"
                                disabled={idx === (about?.bio?.length || 0) - 1}
                                title="Aşağı"
                              >
                                <span className="material-symbols-outlined text-base">arrow_downward</span>
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
                                className="h-[34px] px-2 rounded-lg border border-rose-200 text-xs text-rose-700 hover:bg-rose-50 transition-all"
                                title="Sil"
                              >
                                <span className="material-symbols-outlined text-base">delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {(about?.bio || []).length === 0 ? (
                        <tr>
                          <td className="p-4 text-slate-400 text-center" colSpan={3}>
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
                <div className="flex items-center justify-between mb-3 gap-3">
                  <h3 className="text-base font-semibold text-indigo-700 flex items-center gap-1">
                    <span className="material-symbols-outlined text-lg">music_note</span>
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
                    className="h-[36px] px-4 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-500 text-white text-sm font-medium hover:from-indigo-500 hover:to-violet-400 shadow transition-all duration-150"
                  >
                    <span className="material-symbols-outlined text-sm align-middle">add</span> Yeni Kayıt
                  </button>
                </div>

                <div className="overflow-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-indigo-50 border-b border-slate-200">
                      <tr>
                        <th className="p-3 w-[70px] text-indigo-700 font-semibold">Sıra</th>
                        <th className="p-3 w-[70px] text-indigo-700 font-semibold">ID</th>
                        <th className="p-3 text-indigo-700 font-semibold">Başlık</th>
                        <th className="p-3 text-indigo-700 font-semibold">YouTube URL</th>
                        <th className="p-3 w-[170px] text-indigo-700 font-semibold">İşlemler</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(music || []).map((row, idx) => (
                        <tr
                          key={`${row?.id ?? idx}-${idx}`}
                          className="hover:bg-indigo-50 transition-colors"
                        >
                          <td className="p-3">{idx + 1}</td>
                          <td className="p-3 text-slate-400">{row?.id ?? idx + 1}</td>
                          <td className="p-3">
                            <input
                              className="w-full h-[38px] border border-slate-200 rounded-lg px-3 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
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
                              className="w-full h-[38px] border border-slate-200 rounded-lg px-3 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
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
                                className="h-[34px] px-2 rounded-lg border border-slate-200 text-xs text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent transition-all"
                                disabled={idx === 0}
                                title="Yukarı"
                              >
                                <span className="material-symbols-outlined text-base">arrow_upward</span>
                              </button>
                              <button
                                type="button"
                                onClick={() => setMusic((prev) => moveRow(prev || [], idx, idx + 1))}
                                className="h-[34px] px-2 rounded-lg border border-slate-200 text-xs text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent transition-all"
                                disabled={idx === (music || []).length - 1}
                                title="Aşağı"
                              >
                                <span className="material-symbols-outlined text-base">arrow_downward</span>
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
                                className="h-[34px] px-2 rounded-lg border border-rose-200 text-xs text-rose-700 hover:bg-rose-50 transition-all"
                                title="Sil"
                              >
                                <span className="material-symbols-outlined text-base">delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {(music || []).length === 0 ? (
                        <tr>
                          <td className="p-4 text-slate-400 text-center" colSpan={5}>
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
                <div className="flex items-center justify-between mb-3 gap-3">
                  <h3 className="text-base font-semibold text-indigo-700 flex items-center gap-1">
                    <span className="material-symbols-outlined text-lg">folder_open</span>
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
                    className="h-[36px] px-4 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-500 text-white text-sm font-medium hover:from-indigo-500 hover:to-violet-400 shadow transition-all duration-150"
                  >
                    <span className="material-symbols-outlined text-sm align-middle">add</span> Yeni Kayıt
                  </button>
                </div>

                <div className="overflow-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-indigo-50 border-b border-slate-200">
                      <tr>
                        <th className="p-3 w-[60px] text-indigo-700 font-semibold">Sıra</th>
                        <th className="p-3 w-[70px] text-indigo-700 font-semibold">ID</th>
                        <th className="p-3 text-indigo-700 font-semibold">Başlık</th>
                        <th className="p-3 w-[120px] text-indigo-700 font-semibold">Platform</th>
                        <th className="p-3 text-indigo-700 font-semibold">URL</th>
                        <th className="p-3 w-[170px] text-indigo-700 font-semibold">Cover</th>
                        <th className="p-3 w-[170px] text-indigo-700 font-semibold">İşlemler</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(portfolio || []).map((row, idx) => (
                        <tr
                          key={`${row?.id ?? idx}-${idx}`}
                          className="hover:bg-indigo-50 transition-colors"
                        >
                          <td className="p-3">{idx + 1}</td>
                          <td className="p-3 text-slate-400">{row?.id ?? idx + 1}</td>
                          <td className="p-3">
                            <input
                              className="w-full h-[38px] border border-slate-200 rounded-lg px-3 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
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
                              className="w-full h-[38px] border border-slate-200 rounded-lg px-3 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
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
                              className="w-full h-[38px] border border-slate-200 rounded-lg px-3 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
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
                              className="w-full h-[38px] border border-slate-200 rounded-lg px-3 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
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
                                className="h-[34px] px-2 rounded-lg border border-slate-200 text-xs text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent transition-all"
                                disabled={idx === 0}
                                title="Yukarı"
                              >
                                <span className="material-symbols-outlined text-base">arrow_upward</span>
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  setPortfolio((prev) => moveRow(prev || [], idx, idx + 1))
                                }
                                className="h-[34px] px-2 rounded-lg border border-slate-200 text-xs text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent transition-all"
                                disabled={idx === (portfolio || []).length - 1}
                                title="Aşağı"
                              >
                                <span className="material-symbols-outlined text-base">arrow_downward</span>
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
                                className="h-[34px] px-2 rounded-lg border border-rose-200 text-xs text-rose-700 hover:bg-rose-50 transition-all"
                                title="Sil"
                              >
                                <span className="material-symbols-outlined text-base">delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {(portfolio || []).length === 0 ? (
                        <tr>
                          <td className="p-4 text-slate-400 text-center" colSpan={7}>
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
                <div className="flex items-center justify-between mb-3 gap-3">
                  <h3 className="text-base font-semibold text-indigo-700 flex items-center gap-1">
                    <span className="material-symbols-outlined text-lg">timeline</span>
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
                    className="h-[36px] px-4 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-500 text-white text-sm font-medium hover:from-indigo-500 hover:to-violet-400 shadow transition-all duration-150"
                  >
                    <span className="material-symbols-outlined text-sm align-middle">add</span> Yeni Kayıt
                  </button>
                </div>

                <div className="overflow-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-indigo-50 border-b border-slate-200">
                      <tr>
                        <th className="p-3 w-[60px] text-indigo-700 font-semibold">Sıra</th>
                        <th className="p-3 w-[70px] text-indigo-700 font-semibold">ID</th>
                        <th className="p-3 text-indigo-700 font-semibold">Başlık</th>
                        <th className="p-3 w-[110px] text-indigo-700 font-semibold">Tarih</th>
                        <th className="p-3 w-[110px] text-indigo-700 font-semibold">Platform</th>
                        <th className="p-3 text-indigo-700 font-semibold">URL</th>
                        <th className="p-3 w-[110px] text-indigo-700 font-semibold">Cover</th>
                        <th className="p-3 text-indigo-700 font-semibold">Açıklama</th>
                        <th className="p-3 w-[170px] text-indigo-700 font-semibold">İşlemler</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(timeline || []).map((row, idx) => (
                        <tr
                          key={`${row?.id ?? idx}-${idx}`}
                          className="hover:bg-indigo-50 transition-colors"
                        >
                          <td className="p-3">{idx + 1}</td>
                          <td className="p-3 text-slate-400">{row?.id ?? idx + 1}</td>
                          <td className="p-3">
                            <input
                              className="w-full h-[38px] border border-slate-200 rounded-lg px-3 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
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
                              className="w-full h-[38px] border border-slate-200 rounded-lg px-3 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
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
                              className="w-full h-[38px] border border-slate-200 rounded-lg px-3 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
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
                              className="w-full h-[38px] border border-slate-200 rounded-lg px-3 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
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
                              className="w-full h-[38px] border border-slate-200 rounded-lg px-3 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
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
                              className="w-full h-[38px] border border-slate-200 rounded-lg px-3 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
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
                                className="h-[34px] px-2 rounded-lg border border-slate-200 text-xs text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent transition-all"
                                disabled={idx === 0}
                                title="Yukarı"
                              >
                                <span className="material-symbols-outlined text-base">arrow_upward</span>
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  setTimeline((prev) => moveRow(prev || [], idx, idx + 1))
                                }
                                className="h-[34px] px-2 rounded-lg border border-slate-200 text-xs text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent transition-all"
                                disabled={idx === (timeline || []).length - 1}
                                title="Aşağı"
                              >
                                <span className="material-symbols-outlined text-base">arrow_downward</span>
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
                                className="h-[34px] px-2 rounded-lg border border-rose-200 text-xs text-rose-700 hover:bg-rose-50 transition-all"
                                title="Sil"
                              >
                                <span className="material-symbols-outlined text-base">delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {(timeline || []).length === 0 ? (
                        <tr>
                          <td className="p-4 text-slate-400 text-center" colSpan={9}>
                            Kayıt yok
                          </td>
                        </tr>
                      ) : null}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : null}
          </section>
        </div>

        <div className="mt-7 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className={`flex items-center gap-2 h-[48px] px-7 rounded-lg bg-gradient-to-r from-slate-900 to-indigo-700 text-white text-[17px] font-semibold shadow-lg transition-all
              hover:from-slate-800 hover:to-indigo-600 
              disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:from-slate-900`}
          >
            {saving ? (
              <>
                <svg className="animate-spin mr-1 h-5 w-5 text-indigo-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                Kaydediliyor...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-lg">save</span> Kaydet
              </>
            )}
          </button>
          {message ? (
            <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-50 to-indigo-100 border border-indigo-200 text-indigo-700 text-[15px] shadow transition-all">
              {message}
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* Material Symbols Icon CDN */}
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
          </main>
        </div>
      </div>
    </Layout>
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
