import { useState } from "react";
import Board from "./components/Board/index.js";
import NewGame from "./components/NewGame/index.js";

function App() {
  const [difficulty, setDifficulty] = useState(50);
  const [gameStatus, setGameStatus] = useState("over");

  return (
    <div className="flex flex-col justify-center items-center bg-bg-primary h-screen">
      <div className="text-text-primary text-3xl font-bold my-5">
        Minefield Game
        <button className="ml-5 text-2xl bg-bg-secondary rounded-lg px-3" onClick={() => setGameStatus("over")}>New Game</button>
      </div>

      {gameStatus === "over" && (
        <NewGame difficulty={difficulty} setDifficulty={setDifficulty} setGameStatus={setGameStatus} />
      )}
      <Board difficulty={difficulty} gameStatus={gameStatus} />
    </div>
  );
}

export default App;
