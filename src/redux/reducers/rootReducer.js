import { combineReducers } from "redux";
import { movieReducer } from "./MovieReducer";

export const rootReducer = combineReducers({
  movieReducer: movieReducer
})