import React, { useState } from 'react';
import { getNumbersArray, isEqual } from '../../../helpers/miscellenous';

const Circles = (props) => {

    const [circles] = useState(getNumbersArray(36));


    const selectCircle = (selectedPosition) => {
        if (isEqual(props.autoSelectedPosition, selectedPosition)) {
            props.incrementScore();
            props.changeAutoSelectedPosition();
        } else {
            props.decrementScore();
        }
    };

    const getCircles = () => {
        return (
            circles.map(item => {
                return (
                    <React.Fragment key={item}>
                        <div className="circle" onClick={() => !isEqual(props.autoSelectedPosition, 0) ? selectCircle(item) : ''}></div>
                        {item % 6 === 0 && <br />}
                    </React.Fragment >
                );
            })
        );
    };

    console.log('==selectedPosition====', props.autoSelectedPosition);

    return (
        <div className="circle-wrapper">
            {getCircles()}
        </div>
    );
};

export default Circles;
