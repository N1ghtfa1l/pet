import React, { FC, useState } from "react";
import style from "./Input.module.css";
import "./Input.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { useMemo, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { addFilm } from "../../store/slices/slicesFilm";
import PostService from "../../API/fetch";

const Input: FC = () => {
  const dispatch = useDispatch();
  const isLoaded = useSelector((state: RootState) => state.film.isLoaded);
  const allFilms = useSelector((state: RootState) => state.film.value);
  const [value, setValue] = useState<string>("");

  const fetchFilm = useCallback(async () => {
    try {
      const films = await PostService.getAll();

      dispatch(addFilm(films));
    } catch (error) {
      console.error("Error fetching films:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!isLoaded) {
      fetchFilm();
    }
  }, [fetchFilm, isLoaded]);

  const filmsFilter = useMemo(() => {
    return allFilms.filter((film: any) =>
      film.title.toLowerCase().includes(value.toLowerCase())
    );
  }, [allFilms, value]);

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
          filmsFilter.map((el: any) => (
            <Link to={`/info/${el.id}`} key={el.id}>
              <div className="inputSelect" key={el.id}>
                {el.title}{" "}
              </div>
            </Link>
          ))
        ) : (
          <p>Ничего не найдено</p>
        )}
      </div>
    </div>
  );
};

export default Input;
