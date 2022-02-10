// import logo from './logo.svg';
import './App.css';
import React from 'react';
import '../index.css';
import Joke from "./Joke"
// import MainContent from './MainContent';
// import Footer from './Footer'
// import Header from './Header'
// import style from './style';
// import ReactDOM from 'react-dom';

function App() {
  return(
    <div className='Jokes'>
      <Joke
punchLine="It’s hard to explain puns to kleptomaniacs because they always
take things literally."
/>
      <Joke
      question="Did you hear about the mathematician who's afraid of
      negative numbers?"
      punchLine="He'll stop at nothing to avoid them!"
      />
      <Joke
      question="Hear about the new restaurant called Karma?"
      punchLine="There’s no menu: You get what you deserve."
      />
      <Joke
      question="Did you hear about the actor who fell through the
      floorboards?"
      punchLine="He was just going through a stage."
      />
      <Joke
      question="Did you hear about the claustrophobic astronaut?"
      punchLine="He just needed a little space."
      />
    </div>
  )
  }



export default App;