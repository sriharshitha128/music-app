import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs, playSong, filterGenre, toggleTheme } from "../redux/musicSlice";
import SongCard from "../components/SongCard";
import Sidebar from "../components/Sidebar";
import TopPlay from "../components/TopPlay";
import SongDetails from "./SongDetails";  // relative to Home.jsx

export default function Home() {
  const dispatch = useDispatch();
  const { filteredSongs, isLoading, error, currentSong } = useSelector((state) => state.music);
  const [detailsSong, setDetailsSong] = useState(null);

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>🎵 Music App</h1>
        <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>

        <div style={{ marginTop: "10px" }}>
          <label>Filter by Genre: </label>
          <select onChange={(e) => dispatch(filterGenre(e.target.value))}>
            <option value="All">All</option>
            <option value="Pop">Pop</option>
            <option value="Rock">Rock</option>
            <option value="Jazz">Jazz</option>
          </select>
        </div>

        {isLoading && <p>Loading songs...</p>}
        {error && <p>Error: {error}</p>}

        <div style={{ marginTop: "10px" }}>
          {filteredSongs.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              onPlay={() => dispatch(playSong(song))}
              onDetails={() => setDetailsSong(song)}
            />
          ))}
        </div>

        <TopPlay song={currentSong} />
        {detailsSong && <SongDetails song={detailsSong} onClose={() => setDetailsSong(null)} />}
      </div>
    </div>
  );
}
