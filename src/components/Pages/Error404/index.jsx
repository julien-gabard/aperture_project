import './error404.scss';
import LogoSimple from 'assets/resources/logo_simple.svg';
import { useTitle } from 'hooks/useTitle';

const Error404 = () => {
    useTitle('Error 404');

    return (
        <div className="error404">
            <h1 className="error404-title">Oups !</h1>
            <div className="error404-content">
                <span className="error404-content-4">4</span>
                <img src={LogoSimple} alt="logo_simple.svg" className="error404-content-image" />
                <span className="error404-content-4">4</span>
            </div>
            <p className="error404-message">Cette page n'existe pas</p>
        </div>
    );
}

export default Error404;