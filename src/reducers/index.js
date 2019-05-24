import { combineReducers } from 'redux';
import contacts from './contacts';
import history from './history';
import editor from './editor';
import general from './general';

export default combineReducers({
  contacts,
  history,
  editor,
  general
});
