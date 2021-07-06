import ArticlesList from 'components/Pages/ArticlesList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  // Nom de la props à remplire : donnée à récupérer dans le state
});

const mapDispatchToProps = (dispatch) => ({
  // Dispatch props
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticlesList);