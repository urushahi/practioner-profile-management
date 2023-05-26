import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  name: '',
  email: '',
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState: INITIAL_STATE,
  reducers: {
    addUserDetail: (state, action) => {
      state.name = action?.payload?.name;
      state.email = action?.payload?.email;
    },
    removeUserDetail: (state) => {
      state.name = '';
      state.email = '';
    },
  },
});

const { actions, reducer } = authSlice;

export const { addUserDetail, removeUserDetail } = actions;

export default reducer;
