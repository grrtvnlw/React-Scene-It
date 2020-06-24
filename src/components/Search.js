import React, { Component } from 'react'

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
      console.log(data)
      this.setState({
        movies: data,
      })
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
        <h1>Scene It</h1>
        <h4>Search for the movies you love and save them to your watchlist.</h4>
        <form onSubmit={ this.handleFormSubmit }>
          <input type="text" id="search" name="search" value={ this.state.movieName } onChange={ this.handleChange }></input>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}
