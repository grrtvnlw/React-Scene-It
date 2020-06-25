import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Card, Col, Button } from 'react-bootstrap'
import styles from './MovieCard.module.css';
import { connect } from 'react-redux';
import { addMovie, deleteMovie } from './redux/action';
import Details from './Details';
import { useLocation } from 'react-router-dom'

function MovieCard(props) {
  const location = useLocation()
  console.log(location)
  return (
    <Col md={4} lg={4}>
      <Card className={styles.card}>
        <Card.Header className={styles.header}>
        <Card.Title><h1>{props.movie.Title}</h1></Card.Title>
          <h3>{props.movie.Year}</h3>
        </Card.Header>
        <Card.Body>
            <img src={props.movie.Poster} className={styles.image} alt="" />
        </Card.Body>
          <Details id={props.movie.imdbID} />
          {/* {
            location.pathname === '/' ? 
              <Button className={styles.button} onClick={() => {props.addMovie(props.movie)}}>Add to Watchlist</Button> 
            :
              <Button className={styles.button} onClick={() => {props.deleteMovie(props.movie)}}>Remove from Watchlist</Button>
          } */}
          {
            props.movies.findIndex((movie) => props.movie.imdbID === movie.imdbID) === -1 ? 
              <Button className={styles.button} onClick={() => {props.addMovie(props.movie)}}>Add to Watchlist</Button> 
            :
              <Button className={styles.button} onClick={() => {props.deleteMovie(props.movie)}}>Remove from Watchlist</Button>
          }
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

