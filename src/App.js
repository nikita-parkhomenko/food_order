import React from 'react';

import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import Header from './components/Layout/Header';

const App = () => {
    return (
        <>
            <Cart />
            <Header />
            <main>
                <Meals />
            </main>
        </>
    );
};

export default App;
