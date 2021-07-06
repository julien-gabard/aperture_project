import { fetchArticles } from 'actions/article.actions';
import App from 'components/App';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  // Nom de la props à remplire : donnée à récupérer dans le state
});

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => {
    dispatch(fetchArticles());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);