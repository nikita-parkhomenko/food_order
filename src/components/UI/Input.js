import React, { forwardRef } from 'react';

import classes from './Input.module.css';

const Input = forwardRef((props, ref) => {
    const {input, label} = props;
    return (
        <div className={classes.input}>
            <label htmlFor={input.id}>{label}</label>
            <input ref={ref} id={input.id} {...input} />
        </div>
    )
})

export default Input;
