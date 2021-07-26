import React, { useState } from 'react';

import classes from './Header.module.css';
import leSilpoImage from '../../assets/silpo_banner.jpg';

import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return <>
        <header className={classes.header}>
            <h1>Le Silpo Meals</h1>
            <HeaderCartButton />
        </header>
        <div className={classes["main-image"]}>
            <img src={leSilpoImage} alt="brand banner" />
        </div>
    </>
}

export default Header;