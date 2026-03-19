import { useState, useCallback } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

const DEFAULT_TRACKS = [
  {
    id: 1,
    title: "Eser 1",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

const YouTubePlayer = ({ tracks = [], defaultExpanded = true, inHeader = false }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const trackList = tracks?.length > 0 ? tracks : DEFAULT_TRACKS;
  const currentTrack = trackList[currentIndex] || null;
  const youtubeUrl = currentTrack?.youtubeUrl || "";

  const togglePlay = useCallback(() => {
    if (!youtubeUrl) return;
    setIsPlaying((prev) => !prev);
  }, [youtubeUrl]);

  const stop = useCallback(() => {
    setIsPlaying(false);
  }, []);

  if (!youtubeUrl) return null;

  const wrapperClass = inHeader
    ? `relative z-[50] bg-white shadow-lg border border-gray-200 transition-all duration-300 ${
        isExpanded ? "w-[260px] p-3 rounded-lg" : "w-[44px] h-[44px] rounded-full flex items-center justify-center"
      }`
    : `fixed z-[99999] bg-white shadow-xl border border-gray-200 transition-all duration-300 ${
        isExpanded
          ? "right-[20px] bottom-[90px] w-[320px] p-4 rounded-xl middle:right-[15px] middle:bottom-[85px] middle:w-[280px]"
          : "right-[20px] bottom-[90px] w-[56px] h-[56px] rounded-full flex items-center justify-center middle:right-[15px]"
      }`;

  const inlineStyle = !inHeader
    ? { position: "fixed", right: 20, bottom: 90, zIndex: 99999 }
    : {};

  return (
    <div className={`${wrapperClass} relative`} style={inlineStyle}>
      <div className={isExpanded ? "block" : "hidden"}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Müzik
          </span>
          <button
            onClick={() => setIsExpanded(false)}
            className="text-gray-400 hover:text-gray-600 text-lg leading-none"
            aria-label="Küçült"
          >
            −
          </button>
        </div>
        <p className="text-sm font-medium text-gray-800 mb-3 truncate">
          {currentTrack.title}
        </p>
        {isMuted && (
          <p className="text-xs text-amber-600 mb-2">
            Sesi açmak için aşağıdaki butona tıklayın (tarayıcı kuralı)
          </p>
        )}
        {/* Video gizli - sadece ses. Viewport'ta olmalı (otomatik çalma için), 200x200 min */}
        <div style={{ position: "absolute", right: 0, bottom: 0, width: 200, height: 200, overflow: "hidden", opacity: 0.001 }}>
          <ReactPlayer
            url={youtubeUrl}
            playing={isPlaying}
            muted={isMuted}
            width={200}
            height={200}
            config={{
              youtube: {
                playerVars: { autoplay: 1, mute: 1, showinfo: 0, modestbranding: 1 },
              },
            }}
          />
        </div>
        <div className="flex gap-2">
          {isMuted ? (
            <button
              onClick={() => setIsMuted(false)}
              className="flex-1 py-2 px-4 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Sesi Aç
            </button>
          ) : (
            <button
              onClick={togglePlay}
              className="flex-1 py-2 px-4 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              {isPlaying ? "Duraklat" : "Çal"}
            </button>
          )}
          <button
            onClick={stop}
            className="py-2 px-4 bg-gray-200 text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors"
          >
            Durdur
          </button>
        </div>
      </div>
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-full h-full flex items-center justify-center text-2xl text-gray-700 hover:text-black bg-gray-100 hover:bg-gray-200 rounded-full"
          aria-label="Müzik çaları aç"
        >
          ♪
        </button>
      )}
    </div>
  );
};

export default YouTubePlayer;
