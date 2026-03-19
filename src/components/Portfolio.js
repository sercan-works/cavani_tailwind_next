import { useMemo, useState } from "react";
import { FaApple, FaSpotify, FaYoutube } from "react-icons/fa";
import SectionContainer from "../layout/SectionContainer";
import { useSiteData } from "../context/SiteDataContext";

const Portfolio = () => {
  const { siteData } = useSiteData();
  const [activePlatform, setActivePlatform] = useState("youtube");
  const items = siteData?.portfolio || [];
  const platforms = ["youtube", "spotify", "itunes"];
  const platformMeta = {
    youtube: { label: "Youtube", Icon: FaYoutube },
    spotify: { label: "Spotify", Icon: FaSpotify },
    itunes: { label: "iTunes", Icon: FaApple },
  };

  const filteredItems = useMemo(
    () => items.filter((item) => item.platform === activePlatform),
    [items, activePlatform]
  );

  const platformLabel = (value) => platformMeta[value]?.label || value;
  const getYoutubeEmbedUrl = (url) => {
    if (!url) return null;
    try {
      const parsed = new URL(url);
      if (parsed.hostname.includes("youtu.be")) {
        const id = parsed.pathname.replace("/", "");
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }

      if (parsed.hostname.includes("youtube.com")) {
        const videoId = parsed.searchParams.get("v");
        if (videoId) return `https://www.youtube.com/embed/${videoId}`;

        const pathParts = parsed.pathname.split("/");
        const embedIndex = pathParts.findIndex((part) => part === "embed");
        if (embedIndex !== -1 && pathParts[embedIndex + 1]) {
          return `https://www.youtube.com/embed/${pathParts[embedIndex + 1]}`;
        }
      }
    } catch (error) {
      return null;
    }

    return null;
  };
  const getSpotifyEmbedUrl = (url) => {
    if (!url) return null;
    try {
      const parsed = new URL(url);
      if (!parsed.hostname.includes("spotify.com")) return null;

      const cleanPath = parsed.pathname.replace(/^\/+/, "");
      if (!cleanPath) return null;
      if (cleanPath.startsWith("embed/")) {
        return `https://open.spotify.com/${cleanPath}`;
      }
      return `https://open.spotify.com/embed/${cleanPath}`;
    } catch (error) {
      return null;
    }
  };
  const getItunesEmbedUrl = (url) => {
    if (!url) return null;
    try {
      const parsed = new URL(url);
      if (!parsed.hostname.includes("music.apple.com")) return null;
      return `https://embed.music.apple.com${parsed.pathname}${parsed.search || ""}`;
    } catch (error) {
      return null;
    }
  };
  const getPlatformEmbedUrl = (item) => {
    if (!item?.url) return null;
    if (item.platform === "youtube") return getYoutubeEmbedUrl(item.url);
    if (item.platform === "spotify") return getSpotifyEmbedUrl(item.url);
    if (item.platform === "itunes") return getItunesEmbedUrl(item.url);
    return null;
  };

  return (
    <SectionContainer navName="portfolio">
      <div className="section_inner">
        <div className="cavani_tm_portfolio w-full h-auto clear-both float-left mb-[70px]">
          <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
            <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
              Eserler
            </span>
          </div>

          <div className="w-full h-auto clear-both float-left mt-[38px] mb-[6px] gap-2">
            <ul className="inline-flex items-center gap-2">
              {platforms.map((platform) => {
                const { Icon } = platformMeta[platform] || {};
                return (
                  <li key={platform}>
                    <button
                      type="button"
                      onClick={() => setActivePlatform(platform)}
                      className={`inline-flex min-w-[100px] items-center rounded-[8px] px-[10px] py-[6px] text-[15px] font-bold uppercase tracking-[1.2px] leading-none transition-colors duration-300 ${
                        activePlatform === platform
                          ? "text-black"
                          : "text-black/85 hover:text-black"
                      }`}
                    >
                      {Icon && <Icon className="text-[16px] shrink-0" aria-hidden="true" />}
                      {platformLabel(platform)}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="portfolio_list w-full h-auto clear-both float-left mt-[35px]">
            <ul className="ml-[-30px] flex flex-wrap">
              {filteredItems.map((item) => {
                const embedUrl = getPlatformEmbedUrl(item);

                return (
                  <li className="mb-[30px] w-1/2 pl-[30px]" key={item.id}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="list_inner block w-full h-auto clear-both float-left border border-solid border-[#b9b8c3] p-[20px] transition-all duration-300"
                    >
                      <div className="relative mb-[15px] overflow-hidden">
                        {embedUrl ? (
                          <iframe
                            src={embedUrl}
                            title={item.title}
                            className="aspect-video w-full"
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <img src={item.cover} alt={item.title} className="w-full h-auto" />
                        )}
                      </div>
                      <h3 className="font-medium text-[20px] leading-[1.4] text-[#333] mb-[6px]">
                        {item.title}
                      </h3>
                      <p className="text-[14px] uppercase tracking-[2px] text-[#777]">
                        {platformLabel(item.platform)}
                      </p>
                    </a>
                  </li>
                );
              })}
            </ul>

            {!filteredItems.length && (
              <div className="w-full h-auto clear-both float-left mt-[10px]">
                <p className="text-[#777]">Bu platformda eser bulunamadi.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
