import React from 'react';

import Meals from './components/Meals/Meals';
import Header from './components/Layout/Header';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Meals />
            </main>
        </>
    );
};

export default App;
