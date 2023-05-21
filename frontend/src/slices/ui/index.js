import { combineReducers } from 'redux';
import sidebarReducer from './sidebarSlice';
import allergySidebarSlice from './allergySidebarSlice';

export default combineReducers({
  sidebar: sidebarReducer,
  allergySidebar: allergySidebarSlice,
});
