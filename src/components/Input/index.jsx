import './input.scss';
import PropTypes from 'prop-types';

const Input = ({
    name,
    type,
    onChange,
    value,
    required,
    autoComplete,
    placeholder,
    children
}) => (
    <label htmlFor={name} className={type === 'checkbox' ? 'labelCheckbox' : "label"}>
        {children}
        <input
            type={type}
            name={name}
            id={name}
            className={ type === 'checkbox' ? 'checkbox' : "label-input"}
            onChange={onChange}
            value={value}
            required={required}
            autoComplete={autoComplete}
            placeholder={placeholder}
        />
    </label>
);

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    required: PropTypes.string,
    autoComplete: PropTypes.string,
    placeholder: PropTypes.string,
    children: PropTypes.string.isRequired,
};

export default Input;