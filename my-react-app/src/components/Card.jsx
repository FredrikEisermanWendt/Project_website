import React from "react";

const Card = ({ items }) => {
  return (
    <article className="article-card">
      <img src={items.image}  />
      <h3 className="movie-list">{items.title}</h3>
    </article>
  );
};

export default Card;
