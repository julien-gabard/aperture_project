import axios from 'axios';
import { LOG_IN, /* saveUser */ REGISTER } from 'actions/user.actions';
import { saveMessageModal } from 'actions/modal.actions';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN:
      store.dispatch(saveMessageModal('Vous avez appuyé sur le bouton connexion'))
      // axios({
      //   method: 'POST',
      //   url: '',// <- url de l'API quand j'aurait fini de la développer
      //   data: {
      //     email: store.getState().user.email,
      //     password: store.getState().user.password,
      //   },

      //   // I authorize the management of coockies
      //   //withCredentials: true,
      // })
      //   .then((response) => {
      //     console.log(response);
      //     //store.dispatch(saveUser(response.data.logged, response.data.info));
      //   })
      //   .catch((error) => {
      //     console.warn(error);
      //   });
      next(action);
      break;
    case REGISTER:
      axios({
        method: 'POST',
        url: '',// <- url de l'API quand j'aurait fini de la développer
        data: {
          username: store.getState().user.username,
          email: store.getState().user.email,
          password: store.getState().user.password,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    default:
      next(action);
  }
};

export default userMiddleware;