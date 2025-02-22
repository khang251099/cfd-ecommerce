import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { remove_cart, add_cart } from "../../redux/actions/cart";
import { Link } from "react-router-dom";
import remove from "../../assets/icons/close.svg";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.scss";

const Cart = () => {
  toast.configure({ autoClose: 1000 });
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const removeCart = async (e, item) => {
    e.preventDefault();
    dispatch(remove_cart(item));
  };

  const updateQuantity = (e, item) => {
    e.preventDefault();
    console.log(item.quantity);
    dispatch(add_cart(item));
  };

  const cartTotal = !_.isEmpty(cart)
    ? cart.length > 2
      ? cart.reduce(function (a, b) {
          return a.total + b.total;
        })
      : cart.at(0).total
    : 0;

  const handleOnChange = (e) => {
    console.log("e", e);
  };

  return (
    <div className="container-fluid">
      <div className="cart__item-wrap">
        <h2 className="title">Shopping cart</h2>
        {!_.isEmpty(cart) ? (
          cart?.map((item) => (
            <div className="cart-box">
              <div className="cart-box-top">
                <h4>Name product</h4>
                <h4>Price</h4>
                <h4>Quantity</h4>
                <h4>Total</h4>
              </div>

              <div className="cart-box-bottom" key={item.id}>
                <div className="cart__item-bottom">
                  <Link to={`/product/${item.id}`}>
                    <img src={item.image} />
                  </Link>

                  <div className="cart-info">
                    <h5>{item.title}</h5>
                    <p className="desc">{item.description}</p>
                  </div>
                </div>
                <div className="cart__item-bottom">
                  <div className="cart__item-price">
                    <p className="price-sale">{item.discount} USD</p>
                    <p className="price">{item.price} USD</p>
                  </div>
                </div>
                <div className="cart__item-bottom">
                  <div className="number">
                    <a
                      className="minus"
                      href="#"
                      onClick={(e) => removeCart(e, item)}
                    >
                      -
                    </a>
                    <input
                      type="text"
                      value={item.count}
                      onChange={handleOnChange}
                    />
                    <a
                      className="plus"
                      href="#"
                      onClick={(e) => updateQuantity(e, item)}
                    >
                      +
                    </a>
                  </div>
                </div>

                <div className="cart__item-bottom">
                  <p>{item.total} USD</p>
                </div>
                <div className="cart__item-bottom">
                  <a href="#" className="remove">
                    <img src={remove} />
                  </a>
                </div>
              </div>
              <div className="cart-total-wrap">
                <div className="cart-total-item">
                  <h4>Cart Total</h4>
                  <h5>
                    Total: <span>{cartTotal}</span>
                  </h5>
                  <Link to="/checkout" className="checkout">
                    <p>Proceed to checkout</p>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="error-message">Không có sản phẩm trong giỏ hàng</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
