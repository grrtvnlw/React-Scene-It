import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from './MovieCard.module.css';

export default class Details extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      hidden: true,
      movieDetails: {}
    }
  }

  getDetails = (id) => {
    fetch(`https://www.omdbapi.com/?apikey=efe3c50b&i=${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data) {
          this.setState({
            hidden: !this.state.hidden,
            movieDetails: data
          })
        }
      })
  }
  
  render() {
    const { Plot, Genre, Awards, Actors, Director, Writer, imdbRating } = this.state.movieDetails
    const id = this.props.id

    return (
      <div>
          <Button className={styles.button} onClick={() => {this.getDetails(id)}} variant="secondary">Movie Details</Button>
          {!this.state.hidden && 
            <div>
              { Plot !== 'N/A' && <p><b>Plot: </b>{Plot}</p> }
              { Genre !== 'N/A' && <p><b>Plot: </b>{Genre}</p> }
              { Awards !== 'N/A' && <p><b>Awards: </b>{Awards}</p> }
              { Actors !== 'N/A' && <p><b>Actors: </b>{Actors}</p> }
              { Director !== 'N/A' && <p><b>Director: </b>{Director}</p> }
              { Writer !== 'N/A' && <p><b>Writer: </b>{Writer}</p> }
              { imdbRating !== 'N/A' && 
                <div className={styles.rating}>
                  <span className={styles.imdb}><a href={`https://www.imdb.com/title/${id}`} target="_blank">IMDb</a></span>
                  <span>{imdbRating}/10</span>
                  <span>⭐️</span>
                </div>
              }
            </div>  
          }
      </div>
    )
  }
}
