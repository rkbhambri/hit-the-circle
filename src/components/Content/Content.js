import React, { useState } from 'react';
import { getRandomNumber } from '../../helpers/miscellenous';
import Heading from '../Heading/Heading';
import Score from './Score/Score';
import Circles from './Circles/Circles';
import Controls from './Controls/Controls';
import './Content.css';

const Content = (props) => {

    const [score, setScore] = useState(0);
    const [autoSelectedPosition, setAutoSelectedPosition] = useState(0);

    const startGame = () => {
        setAutoSelectedPosition(getRandomNumber(36));
    };

    const stopGame = () => {
        alert('Your final score is ' + score);
        setScore(0);
        setAutoSelectedPosition(0);
    };

    return (
        <div className="content">
            <Heading heading="Hit the circle" />
            <p>Testing your skill how many circles you can hit ?</p>
            <p>Click on Play button to start the game</p>
            <Score score={score} />
            <hr />
            <Circles
                autoSelectedPosition={autoSelectedPosition}
                incrementScore={() => setScore(prevState => prevState + 1)}
                decrementScore={() => setScore(prevState => prevState - 1)}
                changeAutoSelectedPosition={() => setAutoSelectedPosition(getRandomNumber(36))}
            />
            <hr />
            <Controls
                autoSelectedPosition={autoSelectedPosition}
                startGame={startGame}
                stopGame={stopGame} />
        </div>
    );
};

export default Content;
