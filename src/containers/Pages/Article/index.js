import Article from 'components/Pages/Article';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  articles: state.article.articles,
});

const mapDispatchToProps = (dispatch) => ({
  // Dispatch props
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Article);