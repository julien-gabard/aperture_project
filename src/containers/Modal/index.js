import Modal from 'components/Modal';
import { connect } from 'react-redux';
import { resetShowModal } from 'actions/modal.actions';

const mapStateToProps = (state) => ({
  showModal: state.modal.showModal,
  contentModal: state.modal.contentModal,
});

const mapDispatchToProps = (dispatch) => ({
  resetShowModal: () => {
    dispatch(resetShowModal());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);