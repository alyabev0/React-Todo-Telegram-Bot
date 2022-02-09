import './App.css';
import "./MainContent.css"
import React from 'react';

const MainContent = () => (
    <React.Fragment>
      <main className='main'>
        <AppFunc />
      </main>
      </React.Fragment>
  );
  
  const AppFunc = () => {
    const firstName = "Bob"
    const lastName = "Ziroll"

    const date = new Date()
    const hours = date.getHours()
    var timeOfDay

    if (hours < 12) {
      timeOfDay = "morning"
      } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
      } else {
      timeOfDay = "night"
      }

    return (
    <div>
    <h1>Hello {`${firstName} ${lastName}`}!</h1>

    <h1>It is currently about {date.getHours() % 12} o'clock!  Good {timeOfDay}!</h1>
    </div>
    )
    }

  export default MainContent;