import { createSlice } from "@reduxjs/toolkit";

export const WatchList = createSlice({
  initialState: [],
  name: "WatchList",
  reducers: {
    addToList: (state, action) => {
      const findItem = state.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.quantity += 1;
      } else {
        const itemClone = { ...action.payload, quantity: 1 };
        state.push(itemClone);
      }
    },
    Filter: (state, action) => {
      const index = state.findIndex((i) => i.id === action.payload);
      state.splice(index, 1);
    },
    remove: (state, action) => {
      const index = state.findIndex((i) => i.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addToList, Filter, remove } = WatchList.actions;
export default WatchList;
