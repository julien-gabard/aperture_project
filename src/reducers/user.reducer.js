import { CHANGE_FIELD, SAVE_USER } from 'actions/user.actions';

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
    case SAVE_USER: {
      return {
        ...state,
        email: '',
        password: '',
        userData: action.user,
        isLogged: true,
      }
    }
    default: return state;
  };
};

export default user;