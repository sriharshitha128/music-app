import React from "react";
import SongCard from "../components/SongCard";
import SongDetails from "./SongDetails";
import useStore from "../store/useStore";

export default function Home() {
  const { favoriteGenre } = useStore();

  const songs = [
    { title: "Song 1", artist: "Artist A", genre: "Pop" },
    { title: "Song 2", artist: "Artist B", genre: "Rock" },
    { title: "Song 3", artist: "Artist C", genre: "Pop" },
    { title: "Song 4", artist: "Artist D", genre: "Jazz" },
  ];

  const filtered = favoriteGenre
    ? songs.filter((s) => s.genre === favoriteGenre)
    : songs;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <div>
        {filtered.map((song) => (
          <SongCard key={song.title} song={song} />
        ))}
      </div>
      <SongDetails />
    </div>
  );
}
