import React, { Component } from 'react'
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Watchlist extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Scene It</h1>
          <h5 className="mt-2 mb-3">Search for the movies you love and save them to your watchlist.</h5>
          <Link to='/'>Back to Search</Link>
        </header>
        <Container className="mt-4">
          <Row>
            { this.props.movies.map((movie, index) => {
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

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

export default connect(
  mapStateToProps,
  null,
)(Watchlist);
