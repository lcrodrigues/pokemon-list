import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pokemonListSlice from "./pokemon/pokemonListSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

//combine all reducers specified by our individual slices
const rootReducer = combineReducers({
  pokemonList: pokemonListSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

//set reducer to our store
const store = configureStore({
  reducer: persistedReducer,
});

//create RootState type based in our rootReducer
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
