import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IProjectProps } from '../Interface';

interface ProjectState {
  projects: IProjectProps[];
  status: string;
}

export const fetchProjects = createAsyncThunk<
  IProjectProps[],
  undefined,
  { rejectValue: string }
>('projects/fetchProjects', async (_, { rejectWithValue }) => {
  const response = await fetch(import.meta.env.VITE_PROJECTS_API);
  if (!response.ok) {
    return rejectWithValue('sever Error!');
  }
  const data: IProjectProps[] = await response.json();

  return data;
});

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});
const initialState: ProjectState = {
  projects: [],
  status: STATUSES.IDLE,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
      state.status = STATUSES.IDLE;
    });
    builder.addCase(fetchProjects.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

export default projectsSlice.reducer;
