import React from 'react';

import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = ({ handleShowCart }) => {
    return <button className={classes.button} onClick={handleShowCart}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            5
        </span>
    </button>
}

export default HeaderCartButton;