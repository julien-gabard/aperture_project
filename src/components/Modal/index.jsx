import Cross from 'assets/resources/cross.svg';
import './modal.scss';

/**
 * En cours de développement
 * Quand modalIsOpen est à true :
 * 1 - J'ajoute show dans le className
 * 2 - Je lance le timer pour ajouter hide dans le className après 5 / 10 secondes
 */
const Modal = ({ showModal }) => {

    const handleClick = () => {
        console.log('close modal');
    }

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