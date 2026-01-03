import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Genres from "./pages/Genres";
import TopSongs from "./pages/TopSongs";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/genres" element={<Genres />} />
            <Route path="/top-songs" element={<TopSongs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
