import React, { Component } from "react";
import Movie from "../Movie";
import Slider from "react-slick";
import { connect } from "react-redux";
import { fetchMovieListAPI } from "../../redux/actions/movieAction";

class MovieList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMovieListAPI());
  }

  renderMovieList = () => {
    return this.props.movieList.map(item => {
      return <Movie movie={item} key={item.maPhim}/>
    })
  }

  render() {
    const settings = {
      rows: 2,
      // slidesPerRow: 2,
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
    };
    return (
      <div className="container-fluid main-container-940" id="movieList">
        <ul
          className="nav nav-tabs justify-content-center"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#nowShowingFilms"
              role="tab"
            >
              Đang Chiếu
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#upComingFilms"
              role="tab"
            >
              Sắp Chiếu
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myMovieListContent">
          <div
            className="tab-pane fade show active"
            id="nowShowingFilms"
            role="tabpanel"
          >
            <div>
              <Slider {...settings}>
                {this.renderMovieList()}
              </Slider>
            </div>
          </div>
          <div className="tab-pane fade" id="upComingFilms" role="tabpanel">
            tab2
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movieReducer.movieList
  }
}

export default connect(mapStateToProps)(MovieList);
