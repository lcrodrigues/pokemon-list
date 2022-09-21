import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pokemonListSlice from "./pokemon/pokemonListSlice";
import pokemonDetailSlice from "./pokemon/pokemonDetailSlice";

//combine all reducers specified by our individual slices
const rootReducer = combineReducers({
  pokemonList: pokemonListSlice,
  pokemonDetail: pokemonDetailSlice,
});

//set reducer to our store
const store = configureStore({
  reducer: rootReducer,
});

//create RootState type based in our rootReducer
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
