import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../../assets/images/logo.png";
import login from "../../../assets/icons/user.svg";
import heart from "../../../assets/icons/wishList.svg";
import Search from "../../Search";
import { useNavigate } from "react-router";
import _ from "lodash";

import productApi from "../../../core/api/product";
import { Link } from "react-router-dom";
import "./style.scss";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";
import firebase from "firebase/compat/app";
import { isLoaded, isEmpty } from "react-redux-firebase";
const HeaderBottom = (props) => {
  const { user } = props;

  const [data, setData] = useState([]);

  const profile = useSelector((state) => state.firebase.profile);

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

  const open = useRef(null);

  function openNav(e) {
    open.current.style.width = "300px";
  }
  function closeNav() {
    open.current.style.width = "0";
  }

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
        <div>
          {_.isEmpty(profile) ? (
            <div className="login" style={{ marginLeft: "40px" }}>
              <Link to="/login">
                <img src={login} alt="login" />
              </Link>
            </div>
          ) : (
            <>
              {profile.isEmpty === false ? (
                <>
                  <div id="mySidenav" className="sidenav" ref={open}>
                    <a className="closebtn" onClick={(e) => closeNav(e)}>
                      &times;
                    </a>
                    <Link to="/profile">Profile</Link>
                  </div>
                  <span onClick={(e) => openNav(e)}>
                    <p className="say-hi">Chào {profile.name}</p>
                  </span>
                </>
              ) : (
                <div className="login" style={{ marginLeft: "40px" }}>
                  <Link to="/login">
                    <img src={login} alt="login" />
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default compose(firebaseConnect())(HeaderBottom);
