import userMiddleware from 'middlewares/userMiddleware';
import articlesMiddleware from 'middlewares/articlesMiddleware';
import reducers from 'reducers';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const enhancers = composeWithDevTools(
  applyMiddleware(
    userMiddleware,
    articlesMiddleware,
  ),
);

const store = createStore(
  // reducer
  reducers,
  // enhancer (Middleware)
  enhancers,
);

export default store;