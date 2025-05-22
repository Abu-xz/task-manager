import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import tasksReducer from '../features/tasks/taskSlice.js'

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist action types that contain non-serializable values
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
          "persist/FLUSH",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/LOGOUT",
        ],
      },
    }),
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
