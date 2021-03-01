import React, { Component } from "react";
import weblogo from "../../images/img-header/web-logo.png";
import menu from "../../images/img-header/menu-options.png"
import ScrollSmooth from "../scrollSmooth";

class NavBar extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <img
            className="logo"
            src={weblogo}
            alt="logo"
          />
        </div>
        <div className="header__center d-none d-xl-flex">
          <ScrollSmooth/>
        </div>
        <div className="header__right d-none d-xl-flex">
          <div className="header__account">
            <i className="fas fa-user-circle" />
            <a href="#" style={{borderRight: '1px solid #9b9b9b'}}> Đăng nhập </a>
            <a href="#" > Đăng ký </a>
          </div>
        </div>
        <div className="header__right--mobile d-block d-xl-none">
          <img
            src={menu}
            alt="menu"
            data-toggle="modal"
            data-target="#menuHeaderMobile"
          />
        </div>
      </header>
    );
  }
}

export default NavBar;
