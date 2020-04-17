import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <button onClick={() => props.buttonClickHandler()}>{props.name}</button>
    );
};

export default Button
