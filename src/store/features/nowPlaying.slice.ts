import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { MediaItem } from "../../models/MediaItem";
import { dummyData } from "../../data/dummy";
import { RootState } from "../store";

type NowPlayingState = {
    media: MediaItem;
    playing: boolean;
};

const initialState: NowPlayingState = {
    media: dummyData[8],
    playing: false
};

const nowPlayingSlice = createSlice({
    name: 'nowPlaying',
    initialState,
    reducers: {
        setNowPlayingMedia: (state: NowPlayingState, action: PayloadAction<MediaItem>) => ({
            ...state,
            media: action.payload,
            playing: true
        }),
        setPlaying: (state: NowPlayingState, action: PayloadAction<boolean>) => ({
            ...state,
            playing: action.payload
        })
    }
});

export const { setNowPlayingMedia, setPlaying } = nowPlayingSlice.actions;

export const selectNowPlayingMedia = (state: RootState) => state.nowPlaying.media;

export const selectPlaying = (state: RootState) => ({ playing: state.nowPlaying.playing, id: state.nowPlaying.media.id });

export default nowPlayingSlice.reducer;