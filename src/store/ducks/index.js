import { combineReducers } from 'redux';

import sidebar from './sidebar';
import header from './header';

export default combineReducers({
  sidebar,
  header,
});
