import React, { Component } from 'react'
import MovieCard from './MovieCard';
import styles from './Search.module.css';
import { Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Search extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      movieName: '',
      movies: []
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    let name = this.state.movieName
    fetch(`https://www.omdbapi.com/?apikey=efe3c50b&s=${name}`)
      .then(res => res.json())
      .then(data => {
        if (data.Search) {
          this.setState({
            movies: data.Search
          })
        }
      })
  }

  handleChange = (e) => {
    this.setState({
      movieName: e.target.value
    })
  }

  render() {
    return (
      <div>
        <header>
          <h1>Scene It</h1>
          <h5>Search for the movies you love and save them to your watchlist.</h5>
          <Link to='/watchlist'>Go to My Watchlist</Link>
          <form onSubmit={ this.handleFormSubmit }>
            <input type="text" id="search" name="search" value={ this.state.movieName } onChange={ this.handleChange } placeholder="Search for a movie..."></input>
            <Button type="submit" variant="secondary">Search</Button>
          </form>
        </header>
        <Container className={styles.movieDiv}>
          <Row>
            { this.state.movies.map((movie, index) => {
              return (
                <MovieCard movie={ movie } key={ index } />
              )
            })}
          </Row>
        </Container>
      </div>
    )
  }
}
