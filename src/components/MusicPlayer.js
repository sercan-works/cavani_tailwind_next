import { useState } from "react";
import dynamic from "next/dynamic";
import siteData from "../../data/site.json";
import { FaPlay, FaPause } from "react-icons/fa";


const ReactPlayer = dynamic(
  () => import("react-player/youtube").then((mod) => mod.default || mod),
  { ssr: false }
);

const defaultTrack = {
  id: 1,
  title: "Eser 1",
  youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
};

const MusicPlayer = () => {
  const firstTrack = siteData?.music?.[0] || defaultTrack;
  const youtubeUrl = firstTrack?.youtubeUrl || "";
  const [isPlaying, setIsPlaying] = useState(false);

  if (!youtubeUrl) return null;

  return (
    <div className="flex items-center gap-10">
      {/* <span className="text-sm text-gray-700 font-medium truncate max-w-[140px]">
        {firstTrack.title}
      </span> */}

      <button
        onClick={() => setIsPlaying((prev) => !prev)}
        className="p-1 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <FaPause className="w-72 h-72" />
        ) : (
          <FaPlay className="w-72 h-72" />
        )}
      </button>

      <div
        className="fixed w-[200px] h-[200px] overflow-hidden pointer-events-none"
        style={{ right: 8, bottom: 8, opacity: 0.001 }}
      >
        <ReactPlayer
          url={youtubeUrl}
          playing={isPlaying}
          controls={false}
          width={200}
          height={200}
          config={{
            youtube: {
              playerVars: {
                autoplay: 1,
                playsinline: 1,
                modestbranding: 1,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
