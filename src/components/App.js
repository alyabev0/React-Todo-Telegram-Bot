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


// class App extends React.Component {
//  constructor() {
//    super() //вызов конструктора родительского класса
//    this.state = {
//      answer: "Yes"
//    }
//  }

//   render() {
//   return (
//   <div>
//   <h1>Is state important to know?</h1>
//   <h1>-{this.state.answer}</h1>
//   </div>
//   )
//   }
//   }

  class App extends React.Component {
      constructor() {
        super()
        this.state = {
          isLoggedIn: true
        }
        if (this.state.isLoggedIn === true) {
          this.state.isLoggedIn = "in"
        }
      }
render(){
    return (
    <div>
    <h1>You are currently logged {this.state.isLoggedIn}</h1>
    </div>
    )
    }
  }
export default App;