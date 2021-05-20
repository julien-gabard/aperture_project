import Cross from 'assets/resources/cross.svg';
import { useEffect } from 'react';
import './modal.scss';

/**
 * En cours de développement
 */
const Modal = () => {

    const handleClick = () => {
        const element = document.getElementsByClassName('modal')[0];
        element.classList.add('hide');
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            const element = document.getElementsByClassName('modal')[0];
            element.classList.add('hide');
        }, 5000);

        return () => {
            clearTimeout(timer);
        }
    })

    return (
        <div className="modal">
            <img
                src={Cross}
                alt="cross.svg"
                className="modal-icon"
                onClick={handleClick}
            />
            <p className="modal-message">Message dans le modal</p>
        </div>
    );
}

export default Modal;