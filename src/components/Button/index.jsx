import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ type, name, children, onClick, choiseStyle }) => (
    <button
        type={type ? type : 'button'}
        className={choiseStyle === 'option' ? 'button option' : 'button'}
        name={name}
        onClick={onClick}
    >
        {children}
    </button>
);

Button.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    children: PropTypes.string.isRequired,
    handleClickButton: PropTypes.func,
    choiseStyle: PropTypes.string,
};

export default Button;