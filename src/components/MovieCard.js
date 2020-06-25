import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Card, Col, Button } from 'react-bootstrap'
import styles from './MovieCard.module.css';
import { connect } from 'react-redux';
import { addMovie, deleteMovie } from './redux/action';
import Details from './Details';
// import { useLocation } from 'react-router-dom'

// alternative location-based ternary included for future reference

function MovieCard(props) {
  // const location = useLocation()
  return (
    <Col sm={6} md={4} lg={3}>
      <Card className={styles.card}>
        <img src={props.movie.Poster} className={styles.image} alt="" />
        <div className={styles.info}>
          <h4>{props.movie.Title}</h4>
          <h5>{props.movie.Year}</h5>
        </div>
        <div className={styles.buttons}>
          <Details id={props.movie.imdbID} />
          {
            props.movies.findIndex((movie) => props.movie.imdbID === movie.imdbID) === -1 ? 
              <Button className={styles.button} onClick={() => {props.addMovie(props.movie)}}>Add to Watchlist</Button> 
            :
              <Button className={styles.button} onClick={() => {props.deleteMovie(props.movie)}}>Remove from Watchlist</Button>
          }
        </div>
          {/* {
            location.pathname === '/' ? 
              <Button className={styles.button} onClick={() => {props.addMovie(props.movie)}}>Add to Watchlist</Button> 
            :
              <Button className={styles.button} onClick={() => {props.deleteMovie(props.movie)}}>Remove from Watchlist</Button>
          } */}
          
      </Card>
    </Col>
  )
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = {
  addMovie,
  deleteMovie
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieCard)

