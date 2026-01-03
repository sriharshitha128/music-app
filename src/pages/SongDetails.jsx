import React from "react";

export default function SongDetails({ song, onClose }) {
  return (
    <div style={{
      position: "fixed",
      top: "20%",
      left: "40%",
      background: "#333",
      padding: "20px",
      borderRadius: "8px",
      color: "#fff",
    }}>
      <h2>{song.title}</h2>
      <p>Artist: {song.artist}</p>
      <p>Genre: {song.genre}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
