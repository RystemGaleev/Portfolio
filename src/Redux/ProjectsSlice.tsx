import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IProjectProps } from '../Interface';

interface ProjectState {
  projects: IProjectProps[];
  loading: boolean;
  error: string | null;
}

export const fetchProjects = createAsyncThunk<
  IProjectProps[],
  undefined,
  { rejectValue: string }
>('projects/fetchProjects', async (_, { rejectWithValue }) => {
  const response = await fetch(
    `https://63ac2eb7cf281dba8c35cb75.mockapi.io/portfolio`,
  );
  if (!response.ok) {
    return rejectWithValue('sever Error!');
  }
  const data: IProjectProps[] = await response.json();

  return data;
});

const initialState: ProjectState = {
  projects: [],
  loading: false,
  error: null,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
      state.loading = false;
    });
    // builder.addCase(fetchMusic.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.error;
    // });
  },
});

export default projectsSlice.reducer;
