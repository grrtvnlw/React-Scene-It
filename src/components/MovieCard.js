import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Card, Col, Button } from 'react-bootstrap'
import styles from './MovieCard.module.css';
import { connect } from 'react-redux';
import { addMovie } from './redux/action';
import Details from './Details';

function MovieCard(props) {
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
          <Button className={styles.button} onClick={() => {props.addMovie(props.movie)}}>Add to Watchlist</Button>
      </Card>
    </Col>
  )
}

const mapDispatchToProps = {
  addMovie
}

export default connect(
  null,
  mapDispatchToProps,
)(MovieCard)

