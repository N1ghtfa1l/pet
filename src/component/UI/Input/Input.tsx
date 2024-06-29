import React, { FC, useState } from "react";
import style from "./Input.module.css";
import "./Input.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useMemo } from "react";

const Input: FC = () => {
  const [value, setValue] = useState<string>("");
  const films = useSelector((state: RootState) => state.allFilms.value);
  const filmsFilter = useMemo(() => {
    return films.filter((film: any) =>
      film.title.toLowerCase().includes(value.toLowerCase())
    );
  }, [films, value]);

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="inputBox">
      <input
        onChange={change}
        value={value}
        className={style.input}
        type="text"
        placeholder="Поиск..."
      />
      <div
        className={
          value ? "inputList inputListActive" : "inputList inputListHidden"
        }
      >
        {filmsFilter.length ? (
          filmsFilter.map((el: any) => <div key={el.id}>{el.title}</div>)
        ) : (
          <p>Ничего не найдено</p>
        )}
      </div>
    </div>
  );
};

export default Input;
