const initialState = {
  movieList: [],
}

export const movieReducer = (state=initialState, action) => {
  switch (action.type) {

    case "FETCH_MOVIE_LIST": {
      state.movieList = action.payload;
      return {...state};
    }

    default:
      return state;
  }
}