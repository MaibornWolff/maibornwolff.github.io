import type { RootState } from '../../app/store';
import { createSlice } from '@reduxjs/toolkit';

interface DarkModeState {
    isInLightMode: boolean;
}

const initialState: DarkModeState = {
    isInLightMode: true,
};

export const slice = createSlice({
    initialState,
    name: 'darkModeState',
    reducers: {
        setIsInLightMode: (
            state,
            action: {
                payload: boolean;
            }
        ) => {
            state.isInLightMode = action.payload;
        },
    },
});

export const { setIsInLightMode } = slice.actions;

export const selectIsInLightMode = (state: RootState): boolean =>
    state.darkModeState.isInLightMode;

export default slice.reducer;
