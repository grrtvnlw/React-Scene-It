import { ADDMOVIE, DELETEMOVIE } from './action'

const initialState = {
  movies: []
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADDMOVIE:
      return {
        movies: [...state.movies, action.value]
      }
    case DELETEMOVIE:
      let results = state.movies.filter(movie => movie.imdbID !== action.value.imdbID)
      return {
        movies: results
      }
    default:
      return state;
  }
}

export default reducer;