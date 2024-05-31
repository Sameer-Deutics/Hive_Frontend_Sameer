import { configureStore } from "@reduxjs/toolkit";
import { apiService } from "./apiService";
import { setupListeners } from "@reduxjs/toolkit/query";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: {
    ...rootReducer,
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});

setupListeners(store.dispatch);

export { store };
