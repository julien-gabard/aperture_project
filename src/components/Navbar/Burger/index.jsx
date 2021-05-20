import PropTypes from 'prop-types';
import './burger.scss';

const Burger = ({ handleClickBurger, openSideDrawer }) => (
    <button className="burger" onClick={handleClickBurger}>
        <span className={openSideDrawer ? 'burger-line open' : 'burger-line' } />
        <span className={openSideDrawer ? 'burger-line open' : 'burger-line' } />
        <span className={openSideDrawer ? 'burger-line open' : 'burger-line' } />
    </button>
);

Burger.propTypes = {
    handleClickBurger: PropTypes.func.isRequired,
    openSideDrawer: PropTypes.bool.isRequired,
}

export default Burger;