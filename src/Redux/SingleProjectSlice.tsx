import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProjectProps } from '../types';

type ProjectState = {
  singleProject: IProjectProps[];
};

const initialState: ProjectState = {
  singleProject: [],
};

const SingleProjectSlice = createSlice({
  name: 'singleProject',
  initialState,
  reducers: {
    currentProject(state, action: PayloadAction<IProjectProps[]>) {
      state.singleProject = action.payload;
    },
  },
});

export const { currentProject } = SingleProjectSlice.actions;
export default SingleProjectSlice.reducer;
