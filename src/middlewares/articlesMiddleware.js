import { FETCH_ARTICLES, saveArticles } from 'actions/article.actions';
// Temporaire
import Data from 'data/articles';

const articlesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
        store.dispatch(saveArticles(Data));
      next(action);
      break;
    default:
      next(action);
  }
};

export default articlesMiddleware;