import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSongs = createAsyncThunk("music/fetchSongs", async () => {
  const res = await axios.get("/mock-songs.json");
  return res.data;
});

const musicSlice = createSlice({
  name: "music",
  initialState: {
    songs: [],
    filteredSongs: [],
    isLoading: false,
    error: null,
    currentSong: null,
    theme: "dark"
  },
  reducers: {
    playSong: (state, action) => {
      state.currentSong = action.payload;
    },
    filterGenre: (state, action) => {
      if (action.payload === "All") state.filteredSongs = state.songs;
      else state.filteredSongs = state.songs.filter(
        (song) => song.genre === action.payload
      );
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.songs = action.payload;
        state.filteredSongs = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { playSong, filterGenre, toggleTheme } = musicSlice.actions;
export default musicSlice.reducer;
