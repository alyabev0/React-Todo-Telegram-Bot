import './App.css';
import "./MainContent.css"
import React from 'react'
// import styles from '../style'

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
    let timeOfDay
    const styles = {
    fontSize: 30
    }

    if (hours < 12) {
      
      timeOfDay = "morning"
      styles.color = "#04756F"
      
      } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
      styles.color = "#2E0927"
      } else {
      timeOfDay = "night"
      styles.color = "#D90000"
      }

    return (
    <div>
    <h1 style={styles}>Hello {`${firstName} ${lastName}`}!</h1>

    <h1 style={styles}>It is currently about {date.getHours() % 12} o'clock!  Good {timeOfDay}!</h1>
    </div>
    )
    }

  export default MainContent;