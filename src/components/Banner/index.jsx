import Logo from 'assets/resources/logo.svg';
import PropTypes from 'prop-types';
import './banner.scss';

const Banner = ({ userData }) => (
    <div className="banner">
        <img src={Logo} alt="logo.svg" className="banner-logo" />
        <p className="banner-content">{userData ? `Bienvenu ${userData.username}` : 'Blog sur les actualités numériques'}</p>
    </div>
);

Banner.propTypes = {
    userData: PropTypes.object
}

export default Banner;