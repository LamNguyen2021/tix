import React, { Component } from 'react';
import Banner from './components/banner';
import Carousel from './components/carousel';
import Footer from './components/footer';
import MovieList from './components/movieList';
import NavBar from "./components/navBar";
import News from './components/news';
import ShowTime from './components/showTime';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Carousel/>
        <MovieList/>
        <ShowTime/>
        <News/>
        <Banner/>
        <Footer/>
      </div>
    );
  }
}

export default App;