import { ADDMOVIE } from './action'

const initialState = {
  movies: []
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADDMOVIE:
      return {
        movies: [...state.movies, action.value]
      }
      break;
    default:
      return state;
  }
}

export default reducer;