// store.ts
"use client";
// @ts-ignore
import { configureStore, GetDefaultMiddleware } from "@reduxjs/toolkit";
// @ts-ignore
import logger from "redux-logger";
import rightsidebarReducer from "./slices/rightsidebarSlice";
import leftsidebarReducer from "./slices/leftsidebarSlice";

const store = configureStore({
  reducer: {
    rightsidebar: rightsidebarReducer,
    leftsidebar: leftsidebarReducer,
  },
  middleware: (getDefaultMiddleware: GetDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
