import React, { useEffect } from 'react';
import userImg from '../../assets/img/user.png';

const User = ({setCoordinates}) => {

    const handleMove = (event) => {
      setCoordinates((prevCoordinates) => {
        let newX = prevCoordinates.x;
        let newY = prevCoordinates.y;
    
        // check if coordinates are out of bounds
        switch (event.key) {
          case 'ArrowUp':
            newY = Math.min(19, prevCoordinates.y + 1);
            break;
          case 'ArrowDown':
            newY = Math.max(0, prevCoordinates.y - 1);
            break;
          case 'ArrowLeft':
            newX = Math.max(0, prevCoordinates.x - 1);
            break;
          case 'ArrowRight':
            newX = Math.min(24, prevCoordinates.x + 1);
            break;
          default:
            break;
        }
    
        return { x: newX, y: newY };
      });
      };
    
      useEffect(() => {
        window.addEventListener('keydown', handleMove);
    
        return () => {
          window.removeEventListener('keydown', handleMove);
        };
      }, []);
    
      return (
        <div>
          <img src={userImg} alt="user" />
        </div>
      );
};

export default User;