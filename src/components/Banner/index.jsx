import Logo from 'assets/resources/logo.svg';
import './banner.scss';

const Banner = () => (
    <div className="banner">
        <img src={Logo} alt="logo.svg" className="banner-logo" />
        <p className="banner-content">Blog sur les actualités numériques</p>
    </div>
);

export default Banner;