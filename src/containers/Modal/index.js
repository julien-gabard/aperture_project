import Modal from 'components/Modal';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  showModal: state.user.showModal,
});

const mapDispatchToProps = (dispatch) => ({
  // Nom de la prop à remplire : callback qui contient un appel à dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);