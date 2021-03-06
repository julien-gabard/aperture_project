import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './sideDrawer.scss';

const SideDrawer = ({ openSideDrawer, handleClickItem, isLogged }) => {
    useEffect(() => {
        if (openSideDrawer) {
            document.body.classList.add('drawerIsOpen');
        }

        return () => {
            document.body.removeAttribute('class');
        }
    }, [openSideDrawer]);

    return (
        <nav className={!openSideDrawer ? 'SideDrawer' : 'SideDrawer open'}>
            <NavLink
                to="/"
                className="SideDrawer-link"
                activeClassName="selected"
                onClick={handleClickItem}
                exact
            >
                Liste d'articles
            </NavLink>
            <NavLink
                to={isLogged ? '/account' : '/registration'}
                className="SideDrawer-link"
                activeClassName="selected"
                onClick={handleClickItem}
            >
                {isLogged ? 'Mon compte' : 'S\'inscrire'}
            </NavLink>
            <NavLink
                to={isLogged ? '/logout' : '/login'}
                className="SideDrawer-link"
                activeClassName="selected"
                onClick={handleClickItem}
            >
                {isLogged ? 'Déconnexion' : 'Connexion'}
            </NavLink>
            <NavLink
                to="/Confidentiality_conditions"
                className="SideDrawer-link other"
                activeClassName="selected"
                onClick={handleClickItem}
            >
                Conditions de confidentialités
            </NavLink>
            <NavLink
                to="/Legal_notices"
                className="SideDrawer-link other"
                activeClassName="selected"
                onClick={handleClickItem}
            >
                Mentions légals
            </NavLink>
            <span className="SideDrawer-copy">Aperture Project - Copyright &copy;</span>
        </nav>
    );
}

SideDrawer.propTypes = {
    openSideDrawer: PropTypes.bool.isRequired,
    handleClickItem: PropTypes.func.isRequired,
    isLogged: PropTypes.bool.isRequired,
}

export default SideDrawer;