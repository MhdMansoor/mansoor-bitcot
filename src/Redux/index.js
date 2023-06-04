import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storageSession from "redux-persist/es/storage/session";
import thunk from "redux-thunk";
import authReducer from "./reducer/auth";
import productReducer from "./reducer/product";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: storageSession,
};
const reducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
