import { createSlice } from "@reduxjs/toolkit";

export const single_p = createSlice({
  initialState: [],
  name: "singlePage",
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addMovie } = single_p.actions;
export default single_p;
