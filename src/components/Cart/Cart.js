import classes from './Cart.module.css';

import Modal from '../UI/Modal';

const Cart = ({ handleHideCart }) => {
    const goods = [{ id: 1, name: 'sushi', amount: 3, price: 12.99 }];
    return (
        <Modal handleHideCart={handleHideCart}>
            <ul>
                {goods.map(good => <li>{good.name}</li>)}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>29.99</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={handleHideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;