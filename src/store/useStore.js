import { create } from "zustand";

const useStore = create((set) => ({
  darkMode: false,
  toggleTheme: () => set((state) => ({ darkMode: !state.darkMode })),

  currentSong: null,
  isPlaying: false,
  playSong: (song) => set({ currentSong: song, isPlaying: true }),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),

  favoriteGenre: "",
  setFavoriteGenre: (genre) => set({ favoriteGenre: genre }),
}));

export default useStore;
