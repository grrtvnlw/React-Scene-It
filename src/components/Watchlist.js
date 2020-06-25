import React, { Component } from 'react'
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Watchlist extends Component {
  render() {
    return (
      <div>
        <h1>Scene It</h1>
        <Link to='/'>Back to Search</Link>
        <Container>
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
