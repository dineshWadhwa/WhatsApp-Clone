import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducers";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth", "account"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //   devTools: process.env.NODE_ENV !== 'production',
});
