import Pages from 'components/Pages';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  // Dispatch props
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pages);