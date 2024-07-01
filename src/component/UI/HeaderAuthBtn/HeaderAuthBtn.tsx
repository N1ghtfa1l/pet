import React, { FC, ReactNode } from "react";
import style from "./HeaderAuthBtn.module.css";

interface Props {
  children: ReactNode;
}

const HeaderAuthBtn:FC<Props> = ({ children }) => {
  return <button className={style.HeaderAuthBtn}>{children}</button>;
};

export default HeaderAuthBtn;
