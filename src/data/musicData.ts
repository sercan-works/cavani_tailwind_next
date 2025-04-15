export interface MusicTrack {
  id: number;
  title: string;
  artist: string;
  file: string; // Local audio file path
  duration: string;
}

export const musicTracks: MusicTrack[] = [
  {
    id: 1,
    title: "",
    artist: "",
    file: "/music/track1.mp3",
    duration: "3:45"
  }
]; 