import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const SearchItem = ({ data }) => {
  return (
    <div className="search__item-wrap">
      <div className="search__item">
        <img className="search__item-img" alt="" src={data.image} />
        <div className="search__info">
          <h2 className="search__item-title">{data.title}</h2>
          <p className="search__item-desc">{data.description}</p>
        </div>
        <Link to={`/product/${data.id}`}>
          <p>Details</p>
        </Link>
      </div>
    </div>
  );
};

export default SearchItem;
