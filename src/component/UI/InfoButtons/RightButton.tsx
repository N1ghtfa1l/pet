import React, { FC, ReactNode } from 'react';
import style from './RightButton.module.css';
import { useState } from 'react';

interface Props {
  children: ReactNode;
  additionalClass?: string;
  onClick: () => void;
}

const RightButton: FC<Props> = ({ children, onClick, additionalClass }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onClick();
  };

  const buttonClass = `${style.rightButton} ${isClicked ? style.rightButtonActive : ''} ${additionalClass || ''}`;

  return (
    <button className={buttonClass} onClick={handleClick}>
      {children}
    </button>
  );
};

export default RightButton;
