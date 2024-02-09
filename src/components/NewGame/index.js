import React from "react";
import SelectDifficulty from "./SelectDifficulty";
import { useGame } from "../../contexts/GameContext";
import Win from "../Animations/Win";

const NewGame = () => {
  const { gameStatus, point } = useGame();
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
      <div className="flex flex-col justify-center items-center z-20 h-72 w-96 bg-text-primary rounded-lg absolute border-4 shadow-md shadow-black">
        {gameStatus === "won" && (
          <>
            <div className="text-2xl font-bold capitalize">You won!</div>
            <div>Your Score is {point}</div>
            <Win height={150} width={150} />
          </>
        )}
        <div className="text-2xl font-medium my-2 capitalize">
          Start a new game
        </div>

        <div className="text-xl font-medium my-2 text-white">
          Select Difficulty
        </div>
        <SelectDifficulty />
      </div>
    </>
  );
};

export default NewGame;
