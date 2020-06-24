export const ADDMOVIE = 'ADDMOVIE';

export function addMovie(value) {
  console.log('hello world!')
  return {
    type: ADDMOVIE,
    value
  }
}