import './Button.css';

const Button = (props) => {
    return (
        <button onClick={props.handleClick} className="myButton">{props.text}</button>
    )
}

export default Button;