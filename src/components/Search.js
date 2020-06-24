import React, { Component } from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      movies: []
    }
  }
  
  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=efe3c50b&s=`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          movies: data,
        })
      })
  }

  render() {
    return (
      <div>
        <h1>Scene It</h1>
        <h4>Search for the movies you love and save them to your watchlist.</h4>
        <form onSubmit={ this.handleFormSubmit }>
          <input type="text" id="search" name="search" value={ this.state.movies } onChange={ this.handleChange }></input>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}
