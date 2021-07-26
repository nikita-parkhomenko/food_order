import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = props => (<div className={classes.backdrop}></div>);

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

const Modal = props => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, portalDirection)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalDirection)}
        </>
    )
}

export default Modal;
