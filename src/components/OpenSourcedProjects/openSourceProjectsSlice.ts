import Repository from '../utils';
import type { RootState } from '../../app/store';
import { createSlice } from '@reduxjs/toolkit';

interface OpenSourceProjectState {
    isRendered: boolean;
    data: Array<Repository>;
    dataSafe: Array<Repository>;
    currentLanguage: string;
}

const initialState: OpenSourceProjectState = {
    isRendered: false,
    data: [],
    dataSafe: [],
    currentLanguage: 'en',
};

export const slice = createSlice({
    initialState,
    name: 'openSourceProjectState',
    reducers: {
        setIsRendered: (state) => {
            state.isRendered = true;
        },
        setData: (
            state,
            action: {
                payload: Array<Repository>;
                type: string;
            }
        ) => {
            state.data = action.payload;
        },
        setDataSafe: (
            state,
            action: {
                payload: Array<Repository>;
                type: string;
            }
        ) => {
            state.dataSafe = action.payload;
        },
        setLanguage: (
            state,
            action: {
                payload: string;
                type: string;
            }
        ) => {
            state.currentLanguage = action.payload;
        },
    },
});

export const {
    setIsRendered,
    setData,
    setDataSafe,
    setLanguage,
} = slice.actions;
export const selectIsRendered = (state: RootState): boolean =>
    state.openSourceProjectState.isRendered;
export const selectData = (state: RootState): Array<Repository> =>
    state.openSourceProjectState.data;
export const selectDataSafe = (state: RootState): Array<Repository> =>
    state.openSourceProjectState.dataSafe;
export const selectLanguage = (state: RootState): string =>
    state.openSourceProjectState.currentLanguage;

export default slice.reducer;
