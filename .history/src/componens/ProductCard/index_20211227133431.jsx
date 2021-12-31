import React from "react";
import { add_cart } from "../../redux/actions/cart";
// import rate from "../../../assets/images/rate.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import "./style.scss";

const ProductCard = (props) => {
  let { data, quantity } = props;

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const addCart = (e) => {
    e.preventDefault();

    dispatch(add_cart(data));
    navigate("/cart");
  };
  console.log(quantity);
  return (
    <div className="product-item">
      <div className="products-card">
        <div className="product-image">
          <Link to={`/product/${data.id}`}>
            <img
              src={data.image}
              style={{
                width: "237px",
                height: "180px",
                borderRadius: "12px",
              }}
              alt=""
            />
          </Link>
          {parseInt(data.discount) > 0 ? (
            <div className="sale-item">
              <p className="sale">-{data.discount}%</p>
            </div>
          ) : null}
        </div>
        <div className="product-content">
          <h3 className="product-title">{data.title}</h3>
          <p className="desc">{data.description}</p>
          <div className="rate  ">
            {/* <img src={rate} alt="" />
            <img src={rate} alt="" />
            <img src={rate} alt="" />
            <img src={rate} alt="" />
            <img src={rate} alt="" /> */}
          </div>
          <div className="product-button">
            {parseInt(data.discount) > 0 ? (
              <p className="price">
                {parseInt(data.price * data.discount) / 100} USD
              </p>
            ) : (
              <p className="price">{data.price} USD</p>
            )}
            {parseInt(data.discount) > 0 ? (
              <p className="price-sale">{data.price} USD</p>
            ) : null}
            {data.quantity > 0 ? (
              <Link to="" onClick={(e) => addCart(e)} className="btn-buy">
                <p>Buy now</p>
              </Link>
            ) : (
              <Link to="" className="btn-buy-disable">
                <p>Buy now</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
