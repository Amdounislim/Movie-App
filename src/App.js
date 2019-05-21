import React, { Component } from 'react'
import './App.css';
import MovieApp from './MovieApp';
import WithLoading from './WithLoading'

const ListWithLoading = WithLoading(MovieApp);
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading : false
    };
  }


  componentDidMount=() => {
    setTimeout(()=>{
      this.setState({ loading : !this.state.loading });
    }, 5000000);
  } 

  render() {
    return (
      <div>
        <div className="App">
          <div className="movie-app">
            <ListWithLoading isLoading={this.state.loading}/>
          </div>
        </div>

      </div>
    )
  }
}
