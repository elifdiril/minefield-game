import React from "react";
import { useGame } from "../../contexts/GameContext";

const SelectDifficulty = () => {
  const { difficulty, setDifficulty, setGameStatus, setShowGameOver } = useGame();

  return (
    <div className="flex justify-center items-center gap-2">
      <select
        className="text-xl font-bold my-2 text-text-secondary w-1/3"
        value={difficulty}
        onChange={(e) => {
          setDifficulty(e.target.value);
        }}
      >
        <option disabled hidden defaultValue={null}>
          Select a value
        </option>
        <option value="50">Easy</option>
        <option value="70">Medium</option>
        <option value="90">Hard</option>
      </select>

      <button
        className="text-2xl bg-bg-secondary rounded-lg px-3 text-text-primary"
        onClick={() => {
          setGameStatus("started");
          setShowGameOver(false);
        }}
      >
        Start
      </button>
    </div>
  );
};

export default SelectDifficulty;
