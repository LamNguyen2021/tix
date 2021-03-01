import React, { Component } from 'react';
import playVideo from "../../images/img-carousel/play-video.png";
import Dialog1 from '../dialog';

class Movie extends Component {

  render() {
    const {hinhAnh, tenPhim, danhGia, trailer} = this.props.movie;
    return (
      <div className="filmItem">
      <a href="#" className="filmItem__image">
        <div className="filmItem__thumnail" style={{backgroundImage: `url(${hinhAnh})`}}></div>
        <div className="filmItem__showBlackHover">
          <div className="filmItem__playIcon">
            <Dialog1 trailer={trailer}/>
          </div>
        </div>
        <div className="filmItem__avgScore">
          <p className="point">{danhGia}/10</p>
          <p className="starts">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </p>
        </div>
      </a>
      <div className="filmItem__info">
        <div className="filmItem__info--name">
          <p><span>C13</span>{tenPhim}</p>
        </div>
        <div className="filmItem__showButtonHover">
          <a href="#">
            MUA VÉ
          </a>
        </div>
      </div>
    </div>

    );
  }
}

export default Movie;