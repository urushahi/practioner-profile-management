import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  sidebar: {
    show: false,
    id: '',
    title: '',
  },
};
const sidebarSlice = createSlice({
  name: 'sidebarSlice',
  initialState: INITIAL_STATE,
  reducers: {
    showSideBarAction: (state, action) => {
      state.sidebar.show = true;
      state.sidebar.id = action?.payload?.id;
      state.sidebar.title = action?.payload?.title;
    },
    hideSideBarAction: (state) => {
      state.sidebar.show = false;
      state.sidebar.title = '';
    },
  },
});

const { actions, reducer } = sidebarSlice;

export const { showSideBarAction, hideSideBarAction } = actions;

export default reducer;
