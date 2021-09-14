import type { RootState } from '../../app/store';
import { createSlice } from '@reduxjs/toolkit';

interface OpenSourceProjectState {
    isRendered: boolean;
}

const initialState: OpenSourceProjectState = {
    isRendered: false,
};

export const slice = createSlice({
    initialState,
    name: 'openSourceProjectState',
    reducers: {
        setIsRendered: (state) => {
            state.isRendered = true;
        },
    },
});

export const { setIsRendered } = slice.actions;
export const selectIsRendered = (state: RootState): boolean =>
    state.openSourceProjectState.isRendered;

export default slice.reducer;
