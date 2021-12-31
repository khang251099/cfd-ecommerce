import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../../../components/ProductCard";

DetailsBottom.propTypes = {};

function DetailsBottom(props) {
  const { relate } = props;
  console.log(relate);
  const relatedTo = relate.map((index) => index.id);
  console.log(relatedTo);
  return (
    <div className="detail-bottom">
      <h4>Related to</h4>

      {/* {relate.slice(-4).map((item) => (
        <ProductCard />
      ))} */}
      {/* {relate?.slice(-4).map((item) => (
        <ProductCard data={item} key={item.id} />
      ))} */}
    </div>
  );
}

export default DetailsBottom;
