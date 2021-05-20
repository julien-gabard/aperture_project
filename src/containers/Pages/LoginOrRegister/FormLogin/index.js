import { changeField, logIn } from 'actions/user.actions';
import FormLogin from 'components/Pages/LoginOrRegister/FormLogin';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  // Nom de la props à remplire : donnée à récupérer dans le state
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (identifier, newValue) => {
    dispatch(changeField(identifier, newValue));
  },
  handleLogin: () => {
    dispatch(logIn());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormLogin);