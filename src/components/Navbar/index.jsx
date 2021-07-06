import Search from 'assets/resources/search.svg';
import { useScroll } from 'hooks/useScroll';
import { useToggle } from 'hooks/useToggle';
import { useWindowSize } from 'hooks/useWindowSize';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Burger from './Burger';
import './navbar.scss';
import SideDrawer from './SideDrawer';

const Navbar = ({ isLogged }) => {
    const [openSideDrawer, setOpenSideDrawer] = useToggle();
    const { windowWidthSize } = useWindowSize();
    const { scroll } = useScroll({element: 226});
    
    const displayDrawer = () => {
        setOpenSideDrawer();
    };
    
    const handleChangeInputSearch = (evt) => {
        console.log(`Input Search : ${evt.target.value}`);
    }

    const handleSubmitSearch = (evt) => {
        evt.preventDefault();
        console.log('Button Search')
    }

    return (
        <div className={scroll && windowWidthSize > 768 ? 'navbar sticky' : 'navbar'}>
            {windowWidthSize > 768 &&
                <nav className="navbar-nav">
                    <NavLink
                        exact
                        to="/"
                        className="navbar-nav-item"
                        activeClassName="selected"
                    >
                        Liste d'articles
                    </NavLink>
                    {!isLogged &&
                        <>
                            <NavLink
                                to="/registration"
                                className="navbar-nav-item"
                                activeClassName="selected"
                            >
                                S'inscrire
                            </NavLink>
                            <NavLink
                                to="/login"
                                className="navbar-nav-item"
                                activeClassName="selected"
                            >
                                Connexion
                            </NavLink>
                        </>
                    }
                </nav>
            }
            <form className="navbar-form">
                <input
                    type="text"
                    className="navbar-form-input"
                    name="search"
                    placeholder="Rechercher"
                    autoComplete="off"
                    onChange={handleChangeInputSearch}
                />
                <button
                    type="submit"
                    className="navbar-form-button"
                    aria-label="Rechercher"
                    onClick={handleSubmitSearch}
                >
                    <img src={Search} alt="search.svg" className="navbar-form-icon" />
                </button>
            </form>
            {windowWidthSize <= 768 && 
                <>
                    <Burger handleClickBurger={displayDrawer} openSideDrawer={openSideDrawer} />
                    <SideDrawer handleClickItem={displayDrawer} openSideDrawer={openSideDrawer} isLogged={isLogged} />
                </>
            }
        </div>
    );
}

Navbar.propTypes = {
    isLogged: PropTypes.bool.isRequired,
}

export default Navbar;