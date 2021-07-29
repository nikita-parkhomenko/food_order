import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = ({ handleHideCart }) => (<div onClick={handleHideCart} className={classes.backdrop}></div>);

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

const portalDirection = document.getElementById('overlays');

const Modal = ({ handleHideCart, children }) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop handleHideCart={handleHideCart} />, portalDirection)}
            {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalDirection)}
        </>
    )
}

export default Modal;
