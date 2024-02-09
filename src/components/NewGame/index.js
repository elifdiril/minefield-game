import React from "react";
import SelectDifficulty from "./SelectDifficulty";
import { useGame } from "../../contexts/GameContext";

const NewGame = () => {
  const { gameStatus } = useGame();
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
      <div className="flex flex-col justify-center items-center z-20 h-52 w-96 bg-text-primary rounded-lg absolute border-4 shadow-md shadow-black">
        {gameStatus === "won" && <div className="text-3xl font-bold">You won!!</div>}
        <div className="text-2xl font-bold my-5">Start a new game</div>

        <div className="text-xl font-bold my-2 text-white">
          Select Difficulty
        </div>
        <SelectDifficulty />
      </div>
    </>
  );
};

export default NewGame;
