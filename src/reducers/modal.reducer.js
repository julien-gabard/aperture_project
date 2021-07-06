const initialState = {
  /** Allows you to display the modal */
  showModal: false,
  /** Modal content */
  contentModal: 'Contenue du modal',
};

const modal = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return state;
  };
};

export default modal;