import Cross from 'assets/resources/cross.svg';
import { useEffect } from 'react';
import './modal.scss';

/**
 * En cours de développement
 * Quand modalIsOpen est à true :
 * 1 - J'ajoute show dans le className
 * 2 - Je lance le timer pour ajouter hide dans le className après 5 / 10 secondes
 */
const Modal = ({ modalIsOpen }) => {

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
    }, [modalIsOpen])

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