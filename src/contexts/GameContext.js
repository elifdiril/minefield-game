import { createContext, useState, useContext, useEffect } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState(50);
  const [gameStatus, setGameStatus] = useState("new-game");
  const [showGameOver, setShowGameOver] = useState(false);
  const [mines, setMines] = useState([]);
  const [userCoordinates, setUserCoordinates] = useState({ x: 12, y: 0 });
  const [point, setPoint] = useState(0);
  const [nextMineDistance, setNextMineDistance] = useState(null);

  useEffect(() => {
    if (gameStatus === "started") {
      setShowGameOver(false);
      setUserCoordinates({ x: 12, y: 0 });
      setPoint(0);
    }
  }, [gameStatus]);

  useEffect(() => {
    const validMines = mines.filter((mine) => mine.x === userCoordinates.x && mine.y > userCoordinates.y);
    if (validMines.length > 0) {
      const distance = validMines.map((mine) => mine.y - userCoordinates.y);
      setNextMineDistance(Math.min(...distance));
    } else {
      setNextMineDistance(null);
    }

    if (userCoordinates.y === 19) {
      setGameStatus("won");
    }
  }, [userCoordinates.x, userCoordinates.y, mines]);


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
        nextMineDistance,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
