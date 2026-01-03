import { Link } from "react-router-dom";
import useStore from "../store/useStore";

export default function Sidebar() {
  const { darkMode, toggleTheme } = useStore();

  return (
    <div className={`w-60 p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100"}`}>
      <h1 className="text-2xl font-bold mb-4">🎵 Music App</h1>
      <nav className="flex flex-col gap-2">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/genres" className="hover:text-blue-500">Genres</Link>
        <Link to="/top-songs" className="hover:text-blue-500">Top Songs</Link>
      </nav>
      <button 
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={toggleTheme}
      >
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
