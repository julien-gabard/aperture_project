import { NavLink } from 'react-router-dom';
import './footer.scss';

const Footer = () => (
    <footer className="footer">
        <span className="footer-copy">Aperture Project - Copyright &copy;</span>
        <div className="footer-nav">
            <NavLink
                to="/Confidentiality_conditions"
                className="footer-nav-link"
                activeClassName="selected"
            >
                Conditions de confidentialités
            </NavLink>
            <NavLink
                to="/Legal_notices"
                className="footer-nav-link"
                activeClassName="selected"
            >
                Mentions légals
            </NavLink>
        </div>
    </footer>
);

export default Footer;