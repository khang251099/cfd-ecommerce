import React from "react";
import SearchItem from "../SearchItem";
import "./style.scss";

const SearchList = ({ data }) => {
  const listItem = data.map((item) => {
    item !== 0 ? (
      <SearchItem key={item.id} data={item} />
    ) : (
      <SearchItem key={item.id} data={item} />
    );
  });
  return <div className="search__item-wrap">{listItem}</div>;
};

export default SearchList;
