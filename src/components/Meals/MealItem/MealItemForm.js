import React, { useRef, useState } from 'react';

import classes from './MealItemForm.module.css';

import Input from '../../UI/Input';

const MealItemForm = ({ id, addToCart }) => {
    const [validationError, setValidationError] = useState('');
    const amountRef = useRef();

    const formHandler = event => {
        event.preventDefault();
        const enteredAmount = Number(amountRef.current.value);

        if (enteredAmount < 1 || enteredAmount > 5) {
            setValidationError('Please enter correct amount from 1 to 5');
            return;
        }

        addToCart(enteredAmount);
    }
    return (
        <form className={classes.form} onSubmit={formHandler}>
            <Input
                ref={amountRef}
                label="Amount"
                input={{
                    id: `amount${id}`,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button type="submit">+ Add</button>
            {validationError ? <p>{validationError}</p> : null}
        </form>
    )
}

export default MealItemForm;
