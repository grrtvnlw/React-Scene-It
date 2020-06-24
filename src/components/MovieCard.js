import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Card } from 'react-bootstrap'
import styles from './MovieCard.module.css';

export default function MovieCard(props) {
  console.log(props)
  return (
    <div>
      <Card className={styles.card}>
        <Card.Header>
          <h1>{props.movie.Title}</h1>
          <h3>{props.movie.Year}</h3>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <img src={props.movie.Poster} className={styles.image}alt="" />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

