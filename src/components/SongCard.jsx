import React from "react";

export default function SongCard({ song, onPlay, onDetails }) {
  return (
    <div style={{ background: "#222", marginBottom: "10px", padding: "10px", borderRadius: "6px" }}>
      <h3>{song.title}</h3>
      <p>{song.artist}</p>
      <button onClick={onPlay}>Play</button>
      <button onClick={onDetails}>Details</button>
    </div>
  );
}
