import React, { useEffect } from "react";
import mineImg from "../../assets/img/mine.png";
import User from "../User";
import { useGame } from "../../contexts/GameContext";

const Board = () => {
  const { difficulty, mines, setMines, gameStatus, setGameStatus, userCoordinates, showGameOver, setShowGameOver } = useGame();

  const calculateY = (index) => {
    return Math.floor(index / 25);
  };

  const generateMineArray = () => {
    const mines = [];

    const grid = Array.from({ length: 25 }, () => Array(20).fill(0));

    for (let i = 0; i < difficulty; i++) {
      let x, y;

      // make sure we don't place mines on top of each other and on top of the user's initial position
      do {
        x = Math.floor(Math.random() * 20);
        y = Math.floor(Math.random() * 25);
      } while (grid[y][x] === 1 || (x === 0 && y === 12));

      grid[y][x] = 1;
      mines.push({ x, y });
    }

    return mines;
  };

  useEffect(() => {
    if (gameStatus === "started") {
      setMines(generateMineArray());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty, gameStatus]);

  useEffect(() => {
    const mineFound = mines.find(
      (mine) => mine.x === userCoordinates.x && mine.y === userCoordinates.y
    );
    if (mineFound) {
      setGameStatus("game-over");
      setTimeout(() => {
        setShowGameOver(true);
      }, 2000);
    }
  }, [userCoordinates]);

  return (
    <div className="h-[780px] w-[930px] bg-bg-secondary rounded-xl flex flex-col items-center p-4">
      <div className="flex flex-row flex-wrap-reverse gap-1 w-full">
        {Array.from({ length: 20 * 25 }).map((_, index) => (
          <div
            key={index}
            className="w-8 h-8 border border-gray-300 border-square-primary rounded-sm bg-white"
          >
            {mines.find(
              (mine) => mine.x === index % 25 && mine.y === calculateY(index)
            ) && gameStatus === "game-over" && !showGameOver && <img src={mineImg} alt="mine" />}
            {userCoordinates.x === index % 25 &&
              userCoordinates.y === calculateY(index) && (
                <User />
              )}
          </div>
        ))}
      </div>
      <div className="text-text-primary text-xl font-bold my-5">
        Start Point
      </div>
    </div>
  );
};

export default Board;
