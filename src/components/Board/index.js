import React, { useEffect, useState } from "react";
import mineImg from "../../assets/img/mine.png";
import User from "../User";

const Board = ({ difficulty, gameStatus }) => {
  const [mines, setMines] = useState([]);
  const [userCoordinates, setUserCoordinates] = useState({ x: 12, y: 0 });

  const calculateY = (index) => {
    return Math.floor(index / 25);
  };

  const generateMineArray = () => {
    const mines = [];

    const grid = Array.from({ length: 25 }, () => Array(20).fill(0));

    for (let i = 0; i < difficulty; i++) {
      let x, y;

      do {
        x = Math.floor(Math.random() * 20);
        y = Math.floor(Math.random() * 25);
      } while (grid[y][x] === 1);

      grid[y][x] = 1;
      mines.push({ x, y });
    }

    return mines;
  };

  useEffect(() => {
    setMines(generateMineArray());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty, gameStatus]);

  
  useEffect(() => {
    console.log(userCoordinates);
  }, [userCoordinates]);

  return (
    <div className="h-[780px] w-[930px] bg-bg-secondary rounded-xl flex flex-col items-center p-4">
      <div className="flex flex-row flex-wrap-reverse gap-1 w-full">
        {Array.from({ length: 20 * 25 }).map((_, index) => (
          <div
            key={index}
            className="w-8 h-8 border border-gray-300 border-square-primary rounded-sm bg-white"
          >
            {mines.find(mine => mine.x === index % 25 && mine.y === calculateY(index)) && <img src={mineImg} alt="mine" />}
            {userCoordinates.x === index % 25 && userCoordinates.y === calculateY(index) && <User coordinates={userCoordinates} setCoordinates={setUserCoordinates} />}
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
