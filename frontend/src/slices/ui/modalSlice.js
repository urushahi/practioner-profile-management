import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  modal: {
    show: false,
    title: '',
    content: '',
  },
};
const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: INITIAL_STATE,
  reducers: {
    showModalAction: (state, action) => {
      state.modal.show = true;
      state.modal.title = action?.payload?.title;
      state.modal.content = action?.payload?.content;
    },
    hideModalAction: (state) => {
      state.modal.show = false;
      state.modal.title = '';
      state.modal.content = '';
    },
  },
});

const { actions, reducer } = modalSlice;

export const { showModalAction, hideModalAction } = actions;

export default reducer;
