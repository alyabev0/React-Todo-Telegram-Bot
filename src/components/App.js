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
          name: "Hui",
          age: 10
        }
      }
render(){
    return (
    <div>
    <h1>{this.state.name}</h1>
    <h3>{this.state.age} years old</h3>
    </div>
    )
    }
  }
export default App;