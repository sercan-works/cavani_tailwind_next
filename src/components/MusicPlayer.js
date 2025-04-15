import { useState, useEffect, useRef } from 'react';
import { musicTracks } from '@/src/data/musicData';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(musicTracks[0]);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio(currentTrack.file);
    
    // Clean up on component unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [currentTrack.file]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player p-4 bg-slate-800 rounded-lg shadow-lg max-w-md mx-auto">
    <AudioPlayer
    autoPlay={true}
    src={currentTrack.file}
    onPlay={e => console.log("onPlay")}
    showSkipControls={false}
    showJumpControls={false}
    showFilledVolume={false}
    customProgressBarSection={["progress-bar", "progress-bar-value"]}
    // customIcons={{
    //   play: <span>o</span>,

    // }}
  />
  </div>
  );
};

export default MusicPlayer; 