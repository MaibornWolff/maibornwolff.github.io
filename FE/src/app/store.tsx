import { configureStore } from '@reduxjs/toolkit';
import openSourceProjectsStateReducer from '../components/OpenSourcedProjects/openSourceProjectsSlice';
import darkModeStateReducer from '../components/DarkMode/DarkModeSlice';

const store = configureStore({
    reducer: {
        openSourceProjectState: openSourceProjectsStateReducer,
        darkModeState: darkModeStateReducer,
    },
});

export default store;

// eslint-disable-next-line
export type RootState = ReturnType<typeof store.getState>;
