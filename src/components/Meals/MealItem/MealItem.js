import React, { useContext } from 'react';

import classes from './MealItem.module.css';

import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-store/cart-context';

const MealItem = ({ name, description, price, id }) => {
    const context = useContext(CartContext);
    // save new item to cart context store
    const addToCartItem = amount => {
        context.addItem({ name, price, id, amount });
    }
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{`$${price.toFixed(2)}`}</div>
            </div>
            <div>
                <MealItemForm addToCart={addToCartItem} id={id} />
            </div>
        </li>
    )
}

export default MealItem;
