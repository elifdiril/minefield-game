import React from 'react';
import { useGame } from '../../contexts/GameContext';

const Score = () => {
    const {point} = useGame();
    return (
        <div className='text-2xl font-bold text-text-secondary flex flex-col justify-center items-center bg-bg-secondary h-1/4 rounded-lg p-2'>
            <div>Your Score</div>
            {point}
        </div>
    );
};

export default Score;