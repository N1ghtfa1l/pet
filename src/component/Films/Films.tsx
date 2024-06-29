import React, { useEffect, useState } from "react";
import "./Films.css";
import axios from "axios";
import ListCart from "../ListCart/ListCart";
import { Film } from "../../types/types";
import MorePost from "../MorePost/MorePost";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addAllFilms } from "../store/slices/slicesAllFilm";
import { useCallback } from "react";

const Films = () => {
const dispatch = useDispatch();
const post = useSelector((state: RootState)=> state.allFilms.value)
const isLoaded = useSelector((state: RootState) => state.allFilms.isLoaded);
const [limit, setLimit] = useState<number>(10)


useEffect(() => {
  const handleScroll = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

useEffect(() => {
  const scrollPosition = sessionStorage.getItem("scrollPosition");
  if (scrollPosition) {
    window.scrollTo(0, parseFloat(scrollPosition));
  }
}, []);


const fetchPost = useCallback(async (limit = 10, page = 1) => {
  const postFilm = await axios.get<Film[]>(
    "https://667446ce75872d0e0a95d563.mockapi.io/Films",
    {
      params: {
        limit: limit,
        page: page,
      },
    }
  );
  dispatch(addAllFilms(postFilm.data));
}, [dispatch]);

useEffect(() => {
  if (!isLoaded) {
    fetchPost(limit);
  }
}, [fetchPost, limit, isLoaded]);
 

  return (
    <div className="films">
      <div className="container">
        <div className="filmsInner">
          <div className="filmsTitle">Новые фильмы</div>
          <div className="filmsInnerContent">
              <ListCart post={post} />
          </div>
          <MorePost limit={limit} setLimit={setLimit} fetchPost={fetchPost} />
        </div>
      </div>
    </div>
  );
};

export default Films;
