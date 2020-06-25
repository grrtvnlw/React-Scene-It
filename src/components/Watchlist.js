import React, { Component } from 'react'
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import { Container, Row } from 'react-bootstrap'
// import { addMovie } from './redux/action';

class Watchlist extends Component {
  render() {
    return (
      <div>
        <p>Here is my watchlist</p>
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
