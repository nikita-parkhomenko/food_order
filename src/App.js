import React, { useState } from 'react';

import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import Header from './components/Layout/Header';

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
        <>
            {showCart && <Cart handleHideCart={handleHideCart} />}
            <Header handleShowCart={handleShowCart} />
            <main>
                <Meals />
            </main>
        </>
    );
};

export default App;
