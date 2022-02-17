// import logo from './logo.svg';
import './App.css';
import React from 'react';
import '../index.css';
// import Joke from "./Joke"
// import jokesData from "./jokesData"
// import MainContent from './MainContent';
// import Footer from './Footer'
// import Header from './Header'
// import style from './style';
// import ReactDOM from 'react-dom';


  class App extends React.Component {
      constructor() {
        super()
        this.state = {
          count: 0
          }
          this.handleClick = this.handleClick.bind(this)
          }
          handleClick() {
            this.setState((prevState) => {
              return {
                count: prevState.count + 1
                }
                })
                }
render(){
    return (
      <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.handleClick}>Change!</button>
      </div>
      )
      }
      }
export default App;