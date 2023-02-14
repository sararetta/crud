import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  songs: [],
  loading: true,
  error: null,
};
export const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getSongs: (state, action) => {
      state.loading = false;
      state.songs = action.payload;
    },
    createSong: (state, action) => {
      state.loading = false;
      state.songs = action.payload;
    },
    updateSong: (state, action) => {
      state.loading = false;
      state.songs = action.payload;
    },
    deleteSong: (state, action) => {
      state.loading = false;
      state.songs = action.payload;
    },
  },
});

export const { getSongs, updateSong, deleteSong, createSong } =
  songsSlice.actions;

export default songsSlice.reducer;
