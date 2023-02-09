import { configureStore } from '@reduxjs/toolkit';
import projectsProvider from './ProjectsSlice';
import SingleProjectProvider from './SingleProjectSlice';

const store = configureStore({
  reducer: {
    projects: projectsProvider,
    singleProject: SingleProjectProvider,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
