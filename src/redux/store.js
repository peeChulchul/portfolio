import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { viewerScrollReducer } from "./modules/viewer";

const rootReducer = combineReducers({ viewerScrollReducer });

export const sotre = configureStore({ reducer: rootReducer });
