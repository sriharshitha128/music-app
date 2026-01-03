import React from "react";

export default function TopPlay({ song }) {
  if (!song) return <p>No song playing</p>;
  return (
    <div style={{ background: "#222", padding: "10px", borderRadius: "6px", marginTop: "10px" }}>
      <h3>Now Playing:</h3>
      <p>{song.title} - {song.artist}</p>
    </div>
  );
}
