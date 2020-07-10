import React, { Component } from 'react';
import Countdown from './Countdown.js';

class App extends Component {
  render() {

    const competitions = {
      duration_length: 1,
      duration_name: "Month(s)"
    }

    let plusDays = 0;
    let finalMonths = 0;
    let finalDays = 0;

    const currentDate = new Date();
    
    const currentMonth = currentDate.getMonth() + 1
    const currentDay = currentDate.getDate()
    const daysUntilMonthEnd = 31 - currentDay //Close enough

    if(competitions.duration_name === "Day(s)"){
      plusDays = competitions.duration_length
    }else if(competitions.duration_name === "Week(s)"){
      plusDays = competitions.duration_length * 7
    }else if(competitions.duration_name === "Month(s)"){
      finalMonths = competitions.duration_length
    }

    if(plusDays <= daysUntilMonthEnd){
      finalDays = plusDays;
    }
    while(plusDays > daysUntilMonthEnd){
        finalMonths += 1;
      if(plusDays >= 30){
        plusDays -= 30
      }else if(plusDays < 30){
        plusDays -= daysUntilMonthEnd;
      }
      if(plusDays < 30){
        finalDays = plusDays
      }
    }

    function pad(n, width) {
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(0) + n;
    }

    const year = currentDate.getFullYear()
    const month = pad(currentMonth + finalMonths, 2)
    const day = pad(currentDay + finalDays, 2)

    

    return (
      <div>
        <Countdown date={`${year}-${month}-${day}T00:00:00`} />
      </div>
    );
  }
}

export default App;
