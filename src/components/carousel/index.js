import React, { Component } from "react";
import Slider from "react-slick";
import carousel2 from "../../images/img-carousel/cuc-no-hoa-cuc-cung-2.png";
import carousel3 from "../../images/img-carousel/gia-dinh-chan-to-phieu-luu-ky-4.png";
import carousel4 from "../../images/img-carousel/tiec-trang-mau-blood-3.png";
import carousel5 from "../../images/img-carousel/rom-5.png";
import playvideo from "../../images/img-carousel/play-video.png";
import SearchBar from "../searchBar";
import Dialog1 from "../dialog";


class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
            <div className="carousel__item">
              <button className="carousel__button" type="button">
                <Dialog1 trailer="https://www.youtube.com/embed/2zSzDlaN-9w"/>
              </button>
              <a href="#">
                <img src={carousel2} alt="cuc no hoa cuc cung" />
              </a>
            </div>
            <div className="carousel__item">
              <button className="carousel__button">
                <Dialog1 trailer="https://www.youtube.com/embed/VAvF3VBxOac"/>
              </button>
              <a href="#">
                <img src={carousel3} alt="gia dinh chan to phieu luu ki" />
              </a>          
            </div>
            <div className="carousel__item">
              <button className="carousel__button">
                <Dialog1 trailer="https://www.youtube.com/embed/nh0BklwPN9Q"/>
              </button>
              <a href="#">
                <img src={carousel4} alt="tiec trang mau" />
              </a>
            </div>
            <div className="carousel__item">
              <button className="carousel__button">
                <Dialog1 trailer="https://www.youtube.com/embed/XRm1P7oGpMQ"/>
              </button>
              <a href="#">
                <img src={carousel5} alt="rom" />
              </a>
            </div>
        </Slider>
        <SearchBar/>
      </div>
    );
  }
}

export default Carousel;
