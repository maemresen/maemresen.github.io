import { createSlice } from '@reduxjs/toolkit';

export const navTerminalSlice = createSlice({
    name: 'visibility',
    initialState: {
        value: false,
    },
    reducers: {
        toggle: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = !state.value
        },
    },
});

export const { toggle } = navTerminalSlice.actions

export const getVisibility = state => state.visibility.value;
export default navTerminalSlice.reducer;