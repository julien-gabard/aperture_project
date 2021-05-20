export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const REGISTER = 'REGISTER';

export const changeField = (identifier, newValue) => ({
  type: CHANGE_FIELD,
  identifier,
  newValue
});

export const logIn = () => ({
  type: LOG_IN,
});

export const saveUser = () => ({
  type: SAVE_USER,
});

export const register = () => ({
  type: REGISTER,
})