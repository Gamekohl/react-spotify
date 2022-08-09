import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type MenuState = {
    opened: boolean;
}

const initialState: MenuState = {
    opened: false
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenu: (state: MenuState) => ({
            ...state,
            opened: !state.opened
        }),
        closeMenu: (state: MenuState) => ({
            ...state,
            opened: false
        })
    }
});

export const { toggleMenu, closeMenu } = menuSlice.actions;

export const selectMenuOpened = (state: RootState) => state.menu.opened;

export default menuSlice.reducer;