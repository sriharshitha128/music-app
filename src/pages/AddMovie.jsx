import { useState } from "react";
import MovieForm from "../components/MovieForm";
import { useMovies } from "../context/MovieContext";
import Notification from "../components/Notification";

export default function AddMovie() {
  const { addMovie } = useMovies();
  const [msg, setMsg] = useState("");

  const handleAdd = (movie) => {
    addMovie(movie);
    setMsg("Movie added successfully!");
  };

  return (
    <div>
      <h1 className="text-xl mb-4">Add Movie</h1>
      <Notification message={msg} />
      <MovieForm onSubmit={handleAdd} />
    </div>
  );
}

