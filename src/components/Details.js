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
    return (
      <div>
          <Button className={styles.button} onClick={() => {this.getDetails(this.props.id)}} variant="secondary">Details</Button>
          {!this.state.hidden && 
            <div>
              <p>{this.state.movieDetails.Plot}</p>
            </div>  
          }
      </div>
    )
  }
}
