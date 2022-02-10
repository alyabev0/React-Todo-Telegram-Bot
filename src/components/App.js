// import logo from './logo.svg';
import './App.css';
import React from 'react';
import '../index.css';
import ContactCard from "./ContactCard"
// import MainContent from './MainContent';
// import Footer from './Footer'
// import Header from './Header'
// import style from './style';
// import ReactDOM from 'react-dom';

function App() {
  return (
  <div className="contacts">
    <ContactCard
      name="Mr. Whiskerson"
      imgUrl="http://placekitten.com/300/200"
      phone="(212) 555-1234"
      email="mr.whiskaz@catnap.meow"
      />
      <ContactCard
      name="Fluffykins"
      imgUrl="http://placekitten.com/400/200"
      phone="(212) 555-2345"
      email="fluff@me.com"
      />
      <ContactCard
      name="Destroyer"
      imgUrl="http://placekitten.com/400/300"
      phone="(212) 555-3456"
      email="ofworlds@yahoo.com"
      />
      <ContactCard
      name="Felix"
      imgUrl="http://placekitten.com/200/100"
      phone="(212) 555-4567"
      email="thecat@hotmail.com"
      />
  </div>
  )
  }



// const App = () => (
//   <div>
//     <Header />
//     <MainContent />
//     <Footer />
//     </div>
// );

export default App;