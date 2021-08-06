import Banner from 'components/Banner';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  userData: state.user.userData,
});

const mapDispatchToProps = (dispatch) => ({
  // TODO
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Banner);