import React from "react";

export default function Sidebar() {
  return (
    <div style={{ width: "200px", background: "#0d0d0d", padding: "20px", minHeight: "100vh" }}>
      <h2>Sidebar</h2>
      <ul>
        <li>Home</li>
        <li>Genres</li>
        <li>Top Songs</li>
      </ul>
    </div>
  );
}
