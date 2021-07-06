import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import articleReducer from './article.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  article: articleReducer,
});

export default rootReducer;