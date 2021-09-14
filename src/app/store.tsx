import { configureStore } from '@reduxjs/toolkit';
import openSourceProjectsStateReducer from '../components/OpenSourcedProjects/openSourceProjectsSlice';

const store = configureStore({
    reducer: {
        openSourceProjectState: openSourceProjectsStateReducer,
    },
});

export default store;

// eslint-disable-next-line
export type RootState = ReturnType<typeof store.getState>;
