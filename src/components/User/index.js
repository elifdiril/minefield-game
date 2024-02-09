import React, { useEffect } from "react";
import userImg from "../../assets/img/user.png";
import { useGame } from "../../contexts/GameContext";

const User = () => {
  const { gameStatus, setUserCoordinates } = useGame();
  const handleMove = (event) => {
    if (gameStatus !== "started") {
      return;
    }

    setUserCoordinates((prevCoordinates) => {
      let newX = prevCoordinates.x;
      let newY = prevCoordinates.y;

      // check if coordinates are out of bounds
      switch (event.key) {
        case "ArrowUp":
          newY = Math.min(19, prevCoordinates.y + 1);
          break;
        case "ArrowDown":
          newY = Math.max(0, prevCoordinates.y - 1);
          break;
        case "ArrowLeft":
          newX = Math.max(0, prevCoordinates.x - 1);
          break;
        case "ArrowRight":
          newX = Math.min(24, prevCoordinates.x + 1);
          break;
        default:
          break;
      }

      return { x: newX, y: newY };
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleMove);

    return () => {
      window.removeEventListener("keydown", handleMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStatus]);

  return (
    <div>
      <img src={userImg} alt="user" />
    </div>
  );
};

export default User;
