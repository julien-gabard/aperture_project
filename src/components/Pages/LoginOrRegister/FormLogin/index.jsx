import Button from 'components/Button';
import Input from 'components/Input';
import PropTypes from 'prop-types';

const FormLogin = ({ changeField, handleLogin }) => {

    const handleChange = (evt) => {
        changeField(evt.target.name, evt.target.value);
    }

    const handleShowPassword = () => {
        const element = document.getElementById('password');
        element.type = element.type === 'password' ? 'text' : 'password';
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleLogin();
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                name={'email'}
                type={'email'}
                placeholder={'exemple@exemple.com'}
                onChange={handleChange}
                autoComplete={'off'}
            >
                Email
            </Input>
            <Input
                name={'password'}
                type={'password'}
                onChange={handleChange}
            >
                Mot de passe
            </Input>
            <Input
                name={'showPassword'}
                type={'checkbox'}
                onChange={handleShowPassword}
            >
                Afficher le mot de passe
            </Input>
            <Button type={'submit'} name={'login'}>
                Connexion
            </Button>
        </form>
    );
}

FormLogin.propTypes = {
    changeField: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
}

export default FormLogin;