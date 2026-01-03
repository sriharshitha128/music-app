import useStore from "../store/useStore";

export default function SongCard({ song }) {
  const { currentSong, isPlaying, playSong, togglePlay } = useStore();

  const playingThis = currentSong?.title === song.title && isPlaying;

  return (
    <div className="p-4 border rounded shadow flex justify-between items-center mb-2">
      <div>
        <h2 className="font-bold">{song.title}</h2>
        <p className="text-sm">{song.artist}</p>
      </div>
      <button
        onClick={() => {
          if (currentSong?.title === song.title) togglePlay();
          else playSong(song);
        }}
        className="px-3 py-1 bg-green-500 text-white rounded"
      >
        {playingThis ? "Pause" : "Play"}
      </button>
    </div>
  );
}
