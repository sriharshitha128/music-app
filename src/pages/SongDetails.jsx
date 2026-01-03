import useStore from "../store/useStore";

export default function SongDetails() {
  const { currentSong } = useStore();

  if (!currentSong) return <p>No song is playing</p>;

  return (
    <div className="mt-4 p-4 border rounded bg-gray-200 dark:bg-gray-800 dark:text-white">
      <h2 className="font-bold text-lg">{currentSong.title}</h2>
      <p>Artist: {currentSong.artist}</p>
    </div>
  );
}
