import React from "react";
import { useGame } from "../../contexts/GameContext";
import NewGame from "../NewGame";
import GameOver from "../NewGame/GameOver";
import Board from "../Board";
import Score from "../Score";
import Helper from "../Helper";

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

      {(gameStatus === "new-game" || gameStatus === "won") && <NewGame />}
      {showGameOver && <GameOver />}
      <div className="flex gap-4">
        <Board />
        <div className="flex flex-col justify-between">
          <Score />
          <Helper />
        </div>
      </div>
    </div>
  );
};

export default Container;
