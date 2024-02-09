import React from "react";
import SelectDifficulty from "./SelectDifficulty";
import GameOverAnimation from "../Animations/GameOver";

const GameOver = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
      <div className="flex flex-col justify-center items-center z-20 h-72 w-96 bg-text-primary rounded-lg absolute border-4 shadow-md shadow-black">
        <GameOverAnimation height={150} width={250} />
        <div className="text-xl font-bold my-2 text-white capitalize">
          Do you wanna play again?
        </div>
        <SelectDifficulty />
      </div>
    </>
  );
};

export default GameOver;
