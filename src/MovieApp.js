import React, { Component } from 'react'
import NameFiltre from './NameFiltre';
import RatingFilter from './RatingFilter';
import MovieList from './MovieList';

const missionimpossible = {title: "Mission impossible : Fallout", 
                          image: "http://fr.web.img5.acsta.net/pictures/18/05/14/16/32/0850449.jpg",
                          description:"2018 ‧ Thriller/Action ‧ 2h 28m",
                          rating: 3}
const astar = {title: "A Star Is Born", 
              image: "https://images-na.ssl-images-amazon.com/images/I/71Lp8ou83VL._SL1400_.jpg",
              description:"2018 ‧ Drame/Film d'amour ‧ 2h 14m",
              rating: 4}
const black = {title: "Black Panther", 
              image: "http://fr.web.img2.acsta.net/pictures/17/10/16/15/40/0883250.jpg",
              description:"2018 ‧ Cinéma de fantasy/Film de science-fiction ‧ 2h 15m",
              rating: 5}
const moviesToDisplay = [missionimpossible, astar, black]
export default class MovieApp extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
          minRating: 1,
          movies: moviesToDisplay,
          recherch:'',
        }
      }
      addNewMovie=(x)=> {
        this.setState({
          movies: this.state.movies.concat(x)
        })
      }
    
    render() {
        return (

          <div>
          <div className="movie-app-header">
          <NameFiltre 
            value={this.state.recherch} 
            onChange={(newrecherch)=>{
              this.setState({recherch: newrecherch})
              }} />

          <RatingFilter 
            count={this.state.minRating} 
            onChange={(newRating) => {
              this.setState({
                minRating: newRating,
              })
            }}
          />
        </div>


        <div >
          <MovieList movies={this.state.movies.filter(el => 
                                          el.rating >= this.state.minRating &&
                                          el.title.toUpperCase().includes(this.state.recherch.toUpperCase().trim())
                                          )} addNewMovie={this.addNewMovie}/>
        </div>
          </div>
        )
    }
}
