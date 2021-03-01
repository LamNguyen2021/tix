import React, { Component } from 'react';
import Slider from "react-slick";
import mobile from "../../images/img-banner/mobile.png";
import backapp from "../../images/img-banner/backapp.jpg";
import slide1 from "../../images/img-banner/slide1.jpg";
import slide2 from "../../images/img-banner/slide2.jpg";
import slide3 from "../../images/img-banner/slide3.jpg";
import slide4 from "../../images/img-banner/slide4.jpg";
import slide5 from "../../images/img-banner/slide5.jpg";
import slide6 from "../../images/img-banner/slide6.jpg";
import slide7 from "../../images/img-banner/slide7.jpg";
import slide8 from "../../images/img-banner/slide8.jpg";
import slide9 from "../../images/img-banner/slide9.jpg";
import slide10 from "../../images/img-banner/slide10.jpg";
import slide11 from "../../images/img-banner/slide11.jpg";
import slide12 from "../../images/img-banner/slide12.jpg";
import slide13 from "../../images/img-banner/slide13.jpg";
import slide14 from "../../images/img-banner/slide14.jpg";
import slide15 from "../../images/img-banner/slide15.jpg";
import slide16 from "../../images/img-banner/slide16.jpg";

class Banner extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <section className="banner" style={{backgroundImage: `url(${backapp})`, padding: '120px 0 80px 0', backgroundSize: 'contain'}} id="aplications">
        <div className="container-fluid main-container-940">
          <div className="row">
            <div className="col-lg-6 left">
              <p className="left__text">Ứng dụng tiện lợi dành cho</p>
              <p className="left__text">người yêu điện ảnh</p>
              <br />
              <p className="left__description">Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi
          quà hấp dẫn.</p>
              <br />
              <button className="left__button">App miễn phí - Tải về ngay!</button>
              <p className="left__apps">
                TIX có hai phiên bản
          <a href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"> iOS </a>
                <span>&amp;</span>
                <a href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"> Android</a>
              </p>
            </div>
            <div className="col-lg-6 right">
              <img src={mobile} alt className="img-fluid phone-img" />
              <div id="banner__carousel">
                <Slider {...settings}>
                  <div className="banner__carouselItem">
                    <img src={slide1} alt />
                  </div>
                  <div className="banner__carouselItem">
                    <img src={slide2} alt />
                  </div>
                  <div className="banner__carouselItem">
                    <img src={slide3} alt />
                  </div>
                  <div className="banner__carouselItem">
                    <img src={slide4} alt />
                  </div>
                  <div className="banner__carouselItem">
                    <img src={slide5} alt />
                  </div>
                  <div className="banner__carouselItem">
                    <img src={slide6} alt />
                  </div>
                  <div className="banner__carouselItem">
                    <img src={slide7} alt />
                  </div>
                  <div className="banner__carouselItem">
                    <img src={slide8} alt />
                  </div>
                  <div className="banner__carouselItem">
                    <img src={slide9} alt />
                  </div>
                  <div className="banner__carouselItem">
                    <img src={slide10} alt />
                  </div>
                  <div className="banner__carouselItem">
                    <img src={slide11} alt />
                  </div>
                  <div className="banner__carouselItem">
                    <img src={slide12} alt />
                  </div>
                  <div className="banner__carouselItem">
                    <img src={slide13} alt />
                  </div>
                  <div className="banner__carouselItem">
                    <img src={slide14} alt />
                  </div>
                  <div className="banner__carouselItem">
                    <img src={slide15} alt />
                  </div>
                  <div className="banner__carouselItem">
                    <img src={slide16} alt />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default Banner;