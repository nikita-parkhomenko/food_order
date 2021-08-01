import React, { useContext } from 'react';

import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-store/cart-context';

const HeaderCartButton = ({ handleShowCart }) => {
    const context = useContext(CartContext);

    const totalItems = context.items.reduce((current, item) => {
        return current + item.amount;
    }, 0);

    return <button className={classes.button} onClick={handleShowCart}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {totalItems}
        </span>
    </button>
}

export default HeaderCartButton;