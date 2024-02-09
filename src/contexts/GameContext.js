import { createContext, useState, useContext, useEffect } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState(50);
  const [gameStatus, setGameStatus] = useState("new-game");
  const [showGameOver, setShowGameOver] = useState(false);
  const [mines, setMines] = useState([]);
  const [userCoordinates, setUserCoordinates] = useState({ x: 12, y: 0 });
  const [point, setPoint] = useState(0);

  useEffect(() => {
    if (gameStatus === "started") {
      setShowGameOver(false);
      setUserCoordinates({ x: 12, y: 0 });
      setPoint(0);
    }
  }, [gameStatus]);

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
        point,
        setPoint,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
