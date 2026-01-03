import Home from "./pages/Home";
import { useSelector } from "react-redux";

export default function App() {
  const theme = useSelector((state) => state.music.theme);
  return (
    <div style={{ background: theme === "dark" ? "#111" : "#eee", color: theme === "dark" ? "#fff" : "#000", minHeight: "100vh" }}>
      <Home />
    </div>
  );
}
