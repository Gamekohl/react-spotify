import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./features/menu.slice";
import nowPlayingSlice from "./features/nowPlaying.slice";

export const store = configureStore({
    reducer: {
        nowPlaying: nowPlayingSlice,
        menu: menuSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;