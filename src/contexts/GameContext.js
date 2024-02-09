import { createContext, useState, useContext } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState(50);
  const [gameStatus, setGameStatus] = useState("new-game");
  const [showGameOver, setShowGameOver] = useState(false);
  const [mines, setMines] = useState([]);
  const [userCoordinates, setUserCoordinates] = useState({ x: 12, y: 0 });

  return (
    <GameContext.Provider
      value={{
        difficulty,
        setDifficulty,
        gameStatus,
        setGameStatus,
        showGameOver,
        setShowGameOver,
        mines,
        setMines,
        userCoordinates,
        setUserCoordinates,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
