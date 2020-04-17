import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <input
            maxLength={props.maxLength}
            type={props.type}
            placeholder={props.placeholder}
            id={props.id}
            value={props.value}
            onChange={(event) => props.inputChangeHandler(event)}
            disabled={props.disabled} />
    );
};

export default Input;
