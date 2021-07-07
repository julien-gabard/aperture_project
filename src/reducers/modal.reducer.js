import { RESET_SHOW_MODAL, SAVE_MESSAGE_MODAL } from 'actions/modal.actions';

const initialState = {
  /** Allows you to display the modal */
  showModal: false,
  /** Modal content */
  contentModal: 'Message dans le modal',
};

const modal = (state = initialState, action = {}) => {
  switch (action.type) {
    case RESET_SHOW_MODAL: {
      return {
        ...state,
        showModal: false,
      }
    }
    case SAVE_MESSAGE_MODAL: {
      return {
        ...state,
        showModal: true,
        contentModal: action.content,
      }
    }
    default: return state;
  };
};

export default modal;