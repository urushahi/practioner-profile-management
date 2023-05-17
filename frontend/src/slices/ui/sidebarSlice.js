import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  submitHandler: () => {},
  sidebar: {
    show: false,
    id: 1,
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
      console.log(action?.payload?.content);
    },
    hideSideBarAction: (state) => {
      state.sidebar.show = false;
      state.sidebar.id = null;
      state.sidebar.title = '';
    },
  },
});

const { actions, reducer } = sidebarSlice;

export const { showSideBarAction, hideSideBarAction, toggleSideBarAction } =
  actions;

export default reducer;
