export const ADDMOVIE = 'ADDMOVIE';
export const DELETEMOVIE = 'DELETEMOVIE';

export function addMovie(value) {
  return {
    type: ADDMOVIE,
    value
  }
}

export function deleteMovie(value) {
  return {
    type: DELETEMOVIE,
    value
  }
}