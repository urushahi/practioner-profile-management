import { combineReducers } from 'redux';
import sidebarReducer from './sidebarSlice';
import allergySidebarSlice from './allergySidebarSlice';
import modalSlice from './modalSlice';

export default combineReducers({
  sidebar: sidebarReducer,
  allergySidebar: allergySidebarSlice,
  modal: modalSlice,
});
