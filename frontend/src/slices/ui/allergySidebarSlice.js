import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  sidebar: {
    show: false,
    id: '',
    title: '',
  },
};
const allergySidebarSlice = createSlice({
  name: 'allergySidebarSlice',
  initialState: INITIAL_STATE,
  reducers: {
    showSideBarAction: (state, action) => {
      state.sidebar.show = true;
      state.sidebar.id = action?.payload?.id;
      state.sidebar.title = action?.payload?.title;
    },
    hideSideBarAction: (state) => {
      state.sidebar.show = false;
      state.sidebar.id = '';
      state.sidebar.title = '';
    },
  },
});

const { actions, reducer } = allergySidebarSlice;

export const { showSideBarAction, hideSideBarAction } = actions;

export default reducer;
