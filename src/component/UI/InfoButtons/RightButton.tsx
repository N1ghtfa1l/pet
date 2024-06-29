import React, { FC, ReactNode } from 'react';
import style from './RightButton.module.css'
import { useState } from 'react';


interface props {
    children: ReactNode
    additionalClass?: any;
}


const RigtButton: FC<props> = ({children}) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    return (
        <button
            className={isClicked ? style.rightButtonActive : style.rightButton}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default RigtButton;