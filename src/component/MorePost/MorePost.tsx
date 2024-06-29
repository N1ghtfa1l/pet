import React, { FC } from "react";
import './MorePost.css'

interface Props {
  limit: number;
  setLimit: Function;
  fetchPost: Function;
}

const MorePost: FC<Props> = ({ limit, setLimit, fetchPost }) => {
  const loadMorePosts = () => {
    const moreLimit = limit + 10;
    setLimit(moreLimit);
    fetchPost(moreLimit);
  };
  return (
    <>
      {limit >= 100 ? <div></div> : <button className="morePostBtn" onClick={loadMorePosts}>Загрузить еще</button>}
    </>
  );
};

export default MorePost;
