import React, { Component, Fragment } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class ScrollSmooth extends Component {
  render() {
    return (
      <Fragment>
          <Link
            activeClass="active"
            to="movieList"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="header__item"
          >
            Lịch chiếu
          </Link>
          <Link
            activeClass="active"
            to="showTime"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="header__item"
          >
            Cụm rạp
          </Link>
          <Link
            activeClass="active"
            to="homeNews"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="header__item"
          >
            Tin tức
          </Link>
          <Link
            activeClass="active"
            to="aplications"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="header__item"
          >
            Ứng dụng
          </Link>
      </Fragment>
    );
  }
}

export default ScrollSmooth;
