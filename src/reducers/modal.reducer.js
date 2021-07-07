import { RESET_BOOLEAN_MODAL } from 'actions/modal.actions';

const initialState = {
  /** Allows you to display the modal */
  showModal: false,
  /** Modal content */
  contentModal: 'Message dans le modal',
};

const modal = (state = initialState, action = {}) => {
  switch (action.type) {
    case RESET_BOOLEAN_MODAL: {
      return {
        ...state,
        showModal: false,
      }
    }
    default: return state;
  };
};

export default modal;