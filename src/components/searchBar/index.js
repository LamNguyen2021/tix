import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <section className="searchBar">
        <div className="d-none d-xl-flex buyMovie">
        <div className="buyMovie__listMovie">
          <div className="buyMovie__selectedItem" data-toggle="dropdown" data-flip="false">
            <span>Phim </span>
            <a href="#"><i className="fas fa-chevron-down" /></a>
          </div>
          <div className="dropdown-menu" data-flip="false">
            <a className="dropdown-item">Kiếm khách</a>
            <a className="dropdown-item">Tiệc Trăng Máu 1- Blood Moon Party (C18)</a>
          </div>
        </div>
        <div className="buyMovie__theater">
          <div className="buyMovie__selectedItem" data-toggle="dropdown" data-flip="false">
            <span>Rạp</span>
            <a href="#"><i className="fas fa-chevron-down" /></a>
          </div>
          <div className="dropdown-menu" data-flip="false">
            <a href="#" className="dropdown-item">Lotte Cinema Vũng Tàu</a>
            <a href="#" className="dropdown-item">Lotte Cinema Q7</a>
          </div>
        </div>
        <div className="buyMovie__day">
          <div className="buyMovie__selectedItem" data-toggle="dropdown" data-flip="false">
            <span>Ngày Xem</span>
            <a href="#"><i className="fas fa-chevron-down" /></a>
          </div>
          <div className="dropdown-menu" data-flip="false">
            <a href="#" className="dropdown-item">
              <div>
                <p className="friendly">Hôm may</p>
                <p className="origin">2020-11-23</p>
              </div>
            </a>
            <a href="#" className="dropdown-item">
              <div>
                <p className="friendly">Ngày mai</p>
                <p className="origin">2020-11-24</p>
              </div>
            </a>
            <a href="#" className="dropdown-item">
              <div>
                <p className="friendly">Thứ 3</p>
                <p className="origin">2020-11-25</p>
              </div>
            </a>
          </div>
        </div>
        <div className="buyMovie__showTime">
          <div className="buyMovie__selectedItem" data-toggle="dropdown" data-flip="false">
            <span>Suất Chiếu </span>
            <a href="#"><i className="fas fa-chevron-down" /></a>
          </div>
          <div className="dropdown-menu" data-flip="false">
            <a href="#" className="dropdown-item">
              17:00
            </a>
            <a href="#" className="dropdown-item">
              19:00
            </a>
          </div>
        </div>
        <div className="buyMovie__submit">
          <div className="buyMovie__selectedItem">
            <button type="button" className="btn btn-secondary">
              Mua vé ngay
            </button>
          </div>
        </div>
      </div>
      </section>
    );
  }
}

export default SearchBar;