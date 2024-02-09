import React from "react";

const NewGame = ({ difficulty, setDifficulty, setGameStatus }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
      <div className="flex flex-col justify-center items-center z-20 h-52 w-96 bg-text-primary rounded-lg absolute border-4 shadow-md shadow-black">
        <div className="text-2xl font-bold my-5">Start a new game</div>

        <div className="text-xl font-bold my-2 text-white">
          Select Difficulty
        </div>
        <select
        className="text-xl font-bold my-2 text-text-secondary w-1/3"
        value={difficulty}
          onChange={(e) => {
            setDifficulty(e.target.value);
          }}
        >
            <option disabled hidden defaultValue={null}>Select a value</option>
          <option value="50">Easy</option>
          <option value="70">Medium</option>
          <option value="90">Hard</option>
        </select>

        <button className="text-2xl bg-bg-secondary rounded-lg px-3" onClick={() => setGameStatus("started")}>Start</button>
      </div>
    </>
  );
};

export default NewGame;
