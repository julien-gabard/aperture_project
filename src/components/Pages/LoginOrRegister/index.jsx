import LogoSimple from 'assets/resources/logo_simple.svg';
import FormLogin from 'containers/Pages/LoginOrRegister/FormLogin';
import FormRegister from 'containers/Pages/LoginOrRegister/FormRagister';
import { useTitle } from 'hooks/useTitle';
import { NavLink } from 'react-router-dom';
import './loginOrRegister.scss';

const LoginOrRegister = ({ register }) => {
    useTitle(register ? 'S\'inscrire' : 'Connexion');

    return (
        <div className="loginOrRegister">
            <img src={LogoSimple} alt="logo_simple.svg" className="loginOrRegister-image" />
            <h1 className="loginOrRegister-title">
                {register ? 'S\'inscrire' : 'Connexion'}
            </h1>
            {register ? <FormRegister /> : <FormLogin />}
            {register && 
                <p className="loginOrRegister-message">
                    En cliquant sur s'inscrire, vous acceptez les conditions
                </p>
            }
            {!register && 
                <p className="loginOrRegister-message">
                    Pas de compte ?
                    <NavLink to="/registration" className="loginOrRegister-message-link">
                        S'inscrire
                    </NavLink>
                </p>
            }
        </div>
    );
}

export default LoginOrRegister;