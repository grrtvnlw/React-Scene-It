import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Card, Col, Button } from 'react-bootstrap'
import styles from './MovieCard.module.css';

export default function MovieCard(props) {
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
          <Button className={styles.button} variant="secondary">Details</Button>
          <Button className={styles.button}>Add to Watchlist</Button>
      </Card>
    </Col>
  )
}

