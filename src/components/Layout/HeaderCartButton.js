import React, { useContext } from 'react';

import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-store/cart-context';

const HeaderCartButton = ({ handleShowCart }) => {
    const context = useContext(CartContext);

    console.log('context', context);
    return <button className={classes.button} onClick={handleShowCart}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {context.totalAmount}
        </span>
    </button>
}

export default HeaderCartButton;