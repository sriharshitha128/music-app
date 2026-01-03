import React from "react";
import SongCard from "../components/SongCard";

export default function TopSongs() {
  const songs = [
    { title: "Song 2", artist: "Artist B" },
    { title: "Song 1", artist: "Artist A" },
    { title: "Song 4", artist: "Artist D" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Top Songs</h1>
      {songs.map(song => (
        <SongCard key={song.title} song={song} />
      ))}
    </div>
  );
}
