import React, { FC, ReactNode } from 'react';
import style from './BackButtom.module.css'


interface props {
    children: ReactNode,
}

const BackButton:FC<props> = ({children}) => {


    return (
        <button className={style.backBtn}>
            {children}
        </button>
    );
};

export default BackButton;