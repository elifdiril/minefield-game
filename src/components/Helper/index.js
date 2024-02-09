import React from 'react';
import { useGame } from '../../contexts/GameContext';
import HelperCharacter from '../Animations/HelperCharacter';

const Helper = () => {
    const {nextMineDistance} = useGame();

    return (
        <div className='text-2xl font-bold text-text-secondary flex flex-col justify-center items-center bg-bg-secondary h-1/4 rounded-lg p-2'>
            <div>Mine Distance</div>
            <div>{nextMineDistance ? nextMineDistance : "No Mine"}</div>
            <HelperCharacter height={100} width={100} />
        </div>
    );
};

export default Helper;