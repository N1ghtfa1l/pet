import React, { FC } from "react";
import FilmsCart from "../FilmsCart/FilmsCart";
import { Film } from "../../types/types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFilm } from "../store/slices/slicesFilm";
import { RootState } from "../store/store";

interface post {
  post: any;
}

const ListCart: FC<post> = ({ post }) => {
  const dispatch = useDispatch();
  const films = useSelector((state:RootState) => state.film.value)


  const handlleAddFilm = (film: Film) => {
    const filmContains = films.some((f:Film) => f.id === film.id)
    if (!filmContains) {
      dispatch(addFilm(film))
    }
  };

  return (
    <>
      {post.length > 0 ? (
        post.map((el:any) => (
          <Link
            key={el.id}
            onClick={() => handlleAddFilm(el)}
            to={`/info/${el.id}`}
          >
            <FilmsCart key={el.id} film={el} />
          </Link>
        ))
      ) : (
        <p>Загрузка</p>
      )}
    </>
  );
};

export default ListCart;
