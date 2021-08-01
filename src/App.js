import React, { useState } from 'react';

import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import Header from './components/Layout/Header';
import CartProvider from './store/cart-store/cart-provider';

const App = () => {
    const [showCart, setShowCart] = useState(false);

    const handleShowCart = () => {
        setShowCart(true);
    }

    const handleHideCart = () => {
        setShowCart(false);
    }

    console.log('show cart', showCart);

    return (
        <CartProvider>
            {showCart && <Cart handleHideCart={handleHideCart} />}
            <Header handleShowCart={handleShowCart} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
};

export default App;
