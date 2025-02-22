import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../../assets/images/logo.png";
import login from "../../../assets/icons/user.svg";
import heart from "../../../assets/icons/wishList.svg";
import Search from "../../Search";
//Material

import _ from "lodash";

import productApi from "../../../core/api/product";
import { Link } from "react-router-dom";
import "./style.scss";
import "./dropdown";

const HeaderBottom = (props) => {
  const { user } = props;
  const [data, setData] = useState([]);
  console.log(user);
  // console.log("user", user._delegate.email);
  let dropdown = document.querySelector(".dropdown");

  dropdown.addEventListener("mouseenter", (e) => {
    if (dropdown.classList.contains("closed")) {
      dropdown.classList.remove("closed");
    }
  });
  dropdown.addEventListener("mouseleave", (e) => {
    if (!dropdown.classList.contains("closed")) {
      dropdown.classList.add("closed");
    }
  });
  useEffect(() => {
    try {
      const fetchData = async () => {
        const productList = await productApi.getAll();
        setData(productList);
      };
      fetchData();
    } catch (error) {
      console.log("failed to fetch data", error);
    }
  }, []);

  const [navBar, setNavBar] = useState(false);

  const handleNavBar = () => {
    setNavBar(!navBar);
  };

  return (
    <div className="header__item-wrap --bottom">
      <div className="header__item --logo">
        <Link to="/">
          <img
            src={logo}
            alt="LOGO"
            style={{ width: "177px", height: "18px" }}
          />
          <h1 className="hidden">Freshnesecom</h1>
        </Link>
      </div>
      <Search details={data} />
      <div className="header__item --func">
        <div className="wish-list">
          <Link to="/wishlist">
            <img src={heart} alt="wish-list" />
          </Link>
        </div>

        {/* <div className="login" style={{ marginLeft: "40px" }}>
          <Link to="/login">
            <img src={login} alt="login" />
          </Link>
        </div> */}
        <div class="dropdown closed">
          <h2 class="icon">
            Dropdown <span>∆</span>
          </h2>
          <ul class="menu">
            <li>
              <a href="#">Select this option</a>
            </li>
            <li>
              <a href="#">Choose something else</a>
            </li>
            <li>
              <a href="#">Get help</a>
            </li>
            <li>
              <a href="#">Contact us today</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
