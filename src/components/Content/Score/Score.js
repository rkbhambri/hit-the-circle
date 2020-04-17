import React from 'react';
import Input from '../../Input/Input';

const Score = (props) => {
    return (
        <div style={{ textAlign: 'right' }}>
            <label>Score </label>
            <Input
                type="number"
                placeholder="Score"
                value={props.score}
                disabled={true} />
        </div>
    );
};

export default Score;
