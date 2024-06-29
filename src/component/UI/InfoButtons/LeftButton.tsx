import React, { FC, ReactNode } from 'react';
import style from './LeftButtom.module.css'


interface props {
    children: ReactNode
    additionalClass?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}


const LeftButton: FC<props> = ({children, onClick}) => {

   
    return (
        <button
            className={style.leftButton}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default LeftButton;