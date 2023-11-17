import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { viewerReducer } from "./modules/viewer";

const rootReducer = combineReducers({ viewerReducer });

export const sotre = configureStore({ reducer: rootReducer });
