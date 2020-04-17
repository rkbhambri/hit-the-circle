import React from 'react';
import Button from '../../Button/Button';

const Controls = (props) => {
    return (
        <div className="controls">
            <Button name={props.autoSelectedPosition ? 'Playing' : 'Play'} buttonClickHandler={props.startGame} />
            <Button name={'Stop'} buttonClickHandler={props.stopGame} disabled={props.autoSelectedPosition ? false : true} />
        </div>
    );
};

export default Controls;
