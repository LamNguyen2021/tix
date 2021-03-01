import axios from "axios";
import { createAction } from "./index";

export const fetchMovieListAPI = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09",
    })
      .then((res) => {
        dispatch(createAction("FETCH_MOVIE_LIST", res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
