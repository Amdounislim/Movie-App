import React from 'react'
import Rating from './Rating'

export default function MovieCard(props) {
    const {movie = {}} = props;
    const {title= "", 
    image= "",
    description="",
    rating=0
} = movie
  return (
    <div className="cart">
        <a href="#">
            <img src={image}></img>
            <h4>{title}</h4>
            <p>{description}</p>
            <div className="movie-rating"><Rating count={rating}/></div>
        </a>
    </div>

  )
}
