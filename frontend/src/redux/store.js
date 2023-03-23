import { legacy_createStore } from "redux";
import { reducer } from "./reducer/index.reducer";

export const store = legacy_createStore(reducer);
