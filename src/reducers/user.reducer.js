import { CHANGE_FIELD } from 'actions/user.actions';

const initialState = {
  /** Content of the field to enter email */
  email: '',
  /** Content of the field to enter username */
  username: '',
  /** Content of the field to enter password */
  password: '',
  /** user information */
  userData: null,
  /** Indicates whether the user is logged in */
  isLogged: false,
  /** Allows you to display the modal */
  showModal: false,
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD: {
      const target = action.identifier;

      return {
        ...state,
        [target]: action.newValue,
      }
    }
    default: return state;
  };
};

export default user;