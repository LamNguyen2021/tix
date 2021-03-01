import React, { Component } from 'react';
import bhd from "../../images/img-footer/bhd.png";
import cgv from "../../images/img-footer/cgv.png";
import lotte from "../../images/img-footer/lotte.png";
import mega from "../../images/img-footer/mega.png";
import start from "../../images/img-footer/star.png";
import appleLogo from '../../images/img-footer/apple-logo.png';
import androidLogo from '../../images/img-footer/android-logo.png';
import facebookLogo from '../../images/img-footer/facebook-logo.png';
import zaloLogo from '../../images/img-footer/zalo-logo.png';
import ziconLogo from "../../images/img-footer/zion-logo.jpg";
import congthuongLogo from "../../images/img-footer/cong-thuong-logo.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container-fluild main-container-940">
          <div className="row footer__block1 d-none d-xl-flex">
            <div className="col-4 col-lg-4 footer__FAQ">
              <p className="footer__title">TIX</p>
              <div className="row">
                <div className="col-lg-6">
                  <a href="#">FAQ</a>
                  <a href="#">Brand Guidelines</a>
                </div>
                <div className="col-lg-6">
                  <a href="#"> Thỏa thuận sử dụng</a>
                  <a href="#">Chính sách bảo mật</a>
                </div>
              </div>
            </div>
            <div className="col-4 col-lg-4 footer__partner">
              <p className="footer__title">ĐỐI TÁC</p>
              <div className="row">
                <div className="col-lg-12">
                  <a href="#"><img src={bhd} alt /></a>
                  <a href="#"><img src={cgv} alt /></a>
                  <a href="#"><img src={lotte} alt /></a>
                  <a href="#"><img src={mega} alt /></a>
                  <a href="#"><img src={start} alt /></a>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <a href="#"><img src={bhd} alt /></a>
                  <a href="#"><img src={cgv} alt /></a>
                  <a href="#"><img src={lotte} alt /></a>
                  <a href="#"><img src={mega} alt /></a>
                  <a href="#"><img src={start} alt /></a>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <a href="#"><img src={bhd} alt /></a>
                  <a href="#"><img src={cgv} alt /></a>
                  <a href="#"><img src={lotte} alt /></a>
                  <a href="#"><img src={mega} alt /></a>
                  <a href="#"><img src={start} alt /></a>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <a href="#"><img src={bhd} alt /></a>
                  <a href="#"><img src={cgv} alt /></a>
                  <a href="#"><img src={lotte} alt /></a>
                  <a href="#"><img src={mega} alt /></a>
                  <a href="#"><img src={start} alt /></a>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <a href="#"><img src={bhd} alt /></a>
                  <a href="#"><img src={cgv} alt /></a>
                  <a href="#"><img src={lotte} alt /></a>
                  <a href="#"><img src={mega} alt /></a>
                  <a href="#"><img src={start} alt /></a>
                </div>
              </div>
            </div>
            <div className="col-2 col-lg-2 footer__application">
              <p className="footer__title">MOBILE APP</p>
              <div className="row">
                <div className="col-lg-12">
                  <a href="#"><img src={appleLogo} alt /></a>
                  <a href="#"><img src={androidLogo} alt /></a>
                </div>
              </div>
            </div>
            <div className="col-2 col-lg-2 footer__social">
              <p className="footer__title">SOCIAL</p>
              <div className="row">
                <div className="col-lg-12">
                  <a href="#"><img src={facebookLogo} alt /></a>
                  <a href="#"><img src={zaloLogo} alt /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="row footer__block1--mobile d-flex d-xl-none">
            <div className="row col-12 footer__FAQ justify-content-center">
              <a href="#">FAQ</a>
              <a href="#"> Thỏa thuận sử dụng</a>
              <a href="#">Chính sách bảo mật</a>
              <a href="#">Brand Guidelines</a>
            </div>
            <div className="row col-12 footer__social justify-content-center">
              <a href="#"><img src={facebookLogo} alt /></a>
              <a href="#"><img src={zaloLogo} alt /></a>
            </div>
          </div>
          <div className="row footer__block2">
            <div className="col-12 col-xl-1 footer__block2-left">
              <img src={ziconLogo} alt />
            </div>
            <div className="col-12 col-xl-9 footer__block2-center">
              <p className="footer__title">TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
              <div className="footer__block2-infor">
                <span>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</span>
                <span>
                  Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
            <br />
            đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ
            Chí Minh cấp.
          </span>
                <span>
                  Số Điện Thoại (Hotline): 1900 545 436
            <br />
                  <span>Email: <a href="$">support@tix.vn</a>
                  </span>
                </span></div>
            </div>
            <div className="col-12 col-xl-2 footer__block2-right">
              <img src={congthuongLogo} alt />
            </div>
          </div>
        </div>
      </footer>

    );
  }
}

export default Footer;