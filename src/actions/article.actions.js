export const FETCH_ARTICLES = 'FETCH_ARTICLE';
export const SAVE_ARTICLES = 'SAVE_ARTICLES';

export const fetchArticles = () => ({
  type: FETCH_ARTICLES,
});

export const saveArticles = (articles) => ({
  type: SAVE_ARTICLES,
  newArticles: articles,
})