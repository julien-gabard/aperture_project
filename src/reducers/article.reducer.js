import { SAVE_ARTICLES } from "actions/article.actions";

const initialState = {
  /** Contains item list */
  articles: [],
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ARTICLES: {
      return {
        ...state,
        articles: action.newArticles,
      }
    }
    default: return state;
  };
};

export default user;