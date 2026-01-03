import useStore from "../store/useStore";

export default function Genres() {
  const { favoriteGenre, setFavoriteGenre } = useStore();

  const genres = ["Pop", "Rock", "Jazz"];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Genres</h1>
      <div className="flex gap-2">
        {genres.map(g => (
          <button
            key={g}
            className={`px-4 py-2 rounded ${favoriteGenre === g ? "bg-blue-500 text-white" : "bg-gray-300"}`}
            onClick={() => setFavoriteGenre(g)}
          >
            {g}
          </button>
        ))}
      </div>
    </div>
  );
}
