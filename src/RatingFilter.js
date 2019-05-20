import React from 'react'
import Rating from './Rating';

export default function RatingFilter({onChange, count}) {
  return (
    <div className="rating-filter">
        <span className="rating-filter-text">Minimum rating</span>
        <a href="#" className="stars">
          <Rating 
            count={count} 
            onchangerating={(newRating) =>{
              onChange(newRating)
            }}
          />
        </a>
    </div>
  )
}
