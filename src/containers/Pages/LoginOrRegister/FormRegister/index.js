import { changeField, register } from 'actions/user.actions';
import FormRegister from 'components/Pages/LoginOrRegister/FormRegister';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  // Nom de la props à remplire : donnée à récupérer dans le state
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (identifier, newValue) => {
    dispatch(changeField(identifier, newValue));
  },
  handleRegister: () => {
    dispatch(register());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormRegister);