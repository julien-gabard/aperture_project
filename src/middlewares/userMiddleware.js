import { LOG_IN, saveUser, REGISTER } from 'actions/user.actions';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN:
      const data = {
        email: 'admin@aperture.io',
        password: 'TestAdmin01'
      };

      if (data.email === store.getState().user.email && data.password === store.getState().user.password) {
        store.dispatch(saveUser(data));
      }
      
      next(action);
      break;
    case REGISTER:
      console.log('Middleware for action register');
      next(action);
      break;
    default:
      next(action);
  }
};

export default userMiddleware;