import React, { useReducer } from 'react';

import CartContext from './cart-context';

const initial = {
    items: [],
    totalPrice: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                items: [...state.items, action.item],
                totalPrice: state.totalPrice + action.item.price * action.item.amount,
            }
        case 'REMOVE_ITEM':
            return state
        default: return state
    }
}

const CartProvider = props => {
    const [state, dispatch] = useReducer(reducer, initial);

    const addItemToCart = item => dispatch({ type: 'ADD_ITEM', item });
    const removeItemFromCart = itemId => dispatch({ type: 'REMOVE_ITEM', itemId });

    const cartContext = {
        items: [{ id: 1, name: 'sushi', amount: 3, price: 12.99 }],
        totalPrice: 0,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;