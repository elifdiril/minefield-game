import React from 'react';
import { useGame } from '../../contexts/GameContext';
import NewGame from '../NewGame';
import GameOver from '../NewGame/GameOver';
import Board from '../Board';

const Container = () => {
    const { gameStatus, setGameStatus, showGameOver } = useGame();
    return (
        <div className="flex flex-col justify-center items-center bg-bg-primary h-screen">
        <div className="text-text-primary text-3xl font-bold my-5">
          Minefield Game
          <button
            className="ml-5 text-2xl bg-bg-secondary rounded-lg px-3"
            onClick={() => setGameStatus("new-game")}
          >
            New Game
          </button>
        </div>

        {gameStatus === "new-game" && (
          <NewGame />
        )}
        {showGameOver && (
          <GameOver />
        )}
        <Board />
      </div>
    );
};

export default Container;