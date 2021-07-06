import Modal from 'components/Modal';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  modalIsOpen: state.user.modalIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  // Nom de la prop à remplire : callback qui contient un appel à dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);