import Cross from 'assets/resources/cross.svg';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import './modal.scss';

const Modal = ({ showModal, contentModal, resetShowModal }) => {

    const changeClassListModal = () => {
        const element = document.getElementsByClassName('modal')[0];
        element.classList.remove('show');
        element.classList.add('hide');
    }

    const handleClick = () => {
        changeClassListModal();
        resetShowModal();
    }

    useEffect(() => {
        if (showModal) {
            const element = document.getElementsByClassName('modal')[0];
            element.classList.remove('hide');
            element.classList.add('show');
        }

        const timer = setTimeout(() => {
            if (showModal) {
                changeClassListModal();
                resetShowModal();
            }
        }, 5000);

        return () => {
            clearTimeout(timer);
        }
    }, [showModal, resetShowModal])

    return (
        <div className="modal">
            <img
                src={Cross}
                alt="cross.svg"
                className="modal-icon"
                onClick={handleClick}
            />
            <p className="modal-message">
                {contentModal}
            </p>
        </div>
    );
}

Modal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    contentModal: PropTypes.string.isRequired,
    resetShowModal: PropTypes.func.isRequired,
}

export default Modal;