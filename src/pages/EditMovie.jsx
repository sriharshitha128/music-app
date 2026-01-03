import { useParams } from "react-router-dom";
import { useState } from "react";
import MovieForm from "../components/MovieForm";
import { useMovies } from "../context/MovieContext";
import Notification from "../components/Notification";

export default function EditMovie() {
  const { id } = useParams();
  const { movies, updateMovie } = useMovies();
  const [msg, setMsg] = useState("");

  const movie = movies.find(m => m.id == id);

  const handleUpdate = (data) => {
    updateMovie(data);
    setMsg("Movie updated successfully!");
  };

  return (
    <div>
      <h1 className="text-xl mb-4">Edit Movie</h1>
      <Notification message={msg} />
      <MovieForm initialData={movie} onSubmit={handleUpdate} />
    </div>
  );
}
