import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/animation/game-over.json';

const GameOverAnimation = ({height, width}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie options={defaultOptions} height={height} width={width} />;
};

export default GameOverAnimation;
