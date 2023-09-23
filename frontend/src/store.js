import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare(),
  devTools: true,
});

export default store;
