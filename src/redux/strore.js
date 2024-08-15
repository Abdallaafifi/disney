import { single_p } from "./createSlice";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { WatchList } from "./addToList";
const reducers = combineReducers({
  Movie: single_p.reducer,
  List: WatchList.reducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
});
