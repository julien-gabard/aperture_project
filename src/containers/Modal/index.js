import Modal from 'components/Modal';
import { connect } from 'react-redux';
import { resetBooleanModal } from 'actions/modal.actions';

const mapStateToProps = (state) => ({
  showModal: state.modal.showModal,
  contentModal: state.modal.contentModal,
});

const mapDispatchToProps = (dispatch) => ({
  resetBooleanModal: () => {
    dispatch(resetBooleanModal());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);