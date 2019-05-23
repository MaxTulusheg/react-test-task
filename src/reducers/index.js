import { combineReducers } from 'redux';
import contacts from './contacts';
import history from './history';
import general from './general';

export default combineReducers({
  contacts,
  history,
  general
});
