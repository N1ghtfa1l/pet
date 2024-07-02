import React, { FC } from "react";
import FilmsCart from "../FilmsCart/FilmsCart";
import { Link } from "react-router-dom";

interface post {
  post: any;
}

const ListCart: FC<post> = ({ post }) => {
  return (
    <>
      {post.length > 0 ? (
        post.map((el: any) => (
          <Link key={el.id} to={`/info/${el.id}`}>
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
