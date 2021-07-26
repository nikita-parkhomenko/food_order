import classes from './Input.module.css';

const Input = ({ label, input }) => {
    return (
        <div className={classes.input}>
            <label htmlFor={input.id}>{label}</label>
            <input id={input.id} {...input} />
        </div>
    )
}

export default Input;
