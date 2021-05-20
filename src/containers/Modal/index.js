import Modal from 'components/Modal';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  // Nom de la props à remplire : donnée à récupérer dans le state
});

const mapDispatchToProps = (dispatch) => ({
  // Nom de la prop à remplire : callback qui contient un appel à dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);