import { combineReducers } from 'redux';
import articleReducer from './article.reducer';
import modalReducer from './modal.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  article: articleReducer,
  modal: modalReducer,
});

export default rootReducer;