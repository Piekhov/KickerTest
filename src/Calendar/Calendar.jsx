import React, { useState} from 'react';
import MonthCalendar from './MonthCalendar'
import Button from "@mui/material/Button";
import { grey, green, red, blue, white, purple, blueGrey, } from "@mui/material/colors";
import "./calendar.css";
import { Typography } from '@mui/material';



function Calendar (props) {
  const [date, setDate] = useState(new Date());
 
  let [year, setYear] = useState(new Date().getFullYear());
  let newYear = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  

  const monthNames = ["Januar", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
  const weekNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const monthData = [
    {}
  ]
  // let monthHeader = monthNames.map((name, index) => 
  //   <option key={name} value={index}>{name}</option>
  //   )

  function previos() {
    setYear(year -= 1);
  }
  function next() {
    setYear(year += 1);
  }
  function HandleDayClick () {
    setDate(date)
  };
  return (
    <div className='generalStyle'>
     <header>
        <Button className="Back_Next" size="small" onClick={previos} 
                sx={{color: grey[900]}} >
                  <Typography>{year-1}</Typography></Button>
        <Button className="Year" size="medium" variant="contained" 
                sx={{ backgroundColor: blueGrey[500], color: grey[50]}}
                > <Typography>{year}</Typography></Button>
        <Button className="Back_Next" size="small" onClick={next}
                sx={{color: grey[900]}}
                > <Typography>{year+1}</Typography></Button>
     </header>
     <br/>
     <div className='table'>
      <MonthCalendar newYear = {year} month={month-9} day ={day}/>
      <MonthCalendar newYear = {year} month={month-8} day ={day}/>
      <MonthCalendar newYear = {year} month={month-7} day ={day}/>
      <MonthCalendar newYear = {year} month={month-6} day ={day}/>
      <MonthCalendar newYear = {year} month={month-5} day ={day}/>
      <MonthCalendar newYear = {year} month={month-4} day ={day}/>
      <MonthCalendar newYear = {year} month={month-3} day ={day}/>
      <MonthCalendar newYear = {year} month={month-2} day ={day}/>
      <MonthCalendar newYear = {year} month={month-1} day ={day}/>
      <MonthCalendar newYear = {year} month={month} day ={day}/>
      <MonthCalendar newYear = {year} month={month+1} day ={day}/>
      <MonthCalendar newYear = {year} month={month+2} day ={day}/>

     </div>
     
     <br/>
     <br/>
     <br/>
     {/* <header className='monthNames'>
        {monthNames[month]}
     </header> 
     <table className='header'>
            <thead>
                <tr>
                  {weekNames.map((name) => 
                  <th key={name} className='weekNames'>{name}</th>
                  )}

                </tr>
            </thead>
            <tbody>
              {monthData.map((week, index) => 
                  <tr key={index} className='day'>
                    {week.map((date, index) => date ?
                      <td 
                      className='day'
                      onClick={HandleDayClick}
                      >{date.getDate()}</td>
                      :
                      <td key={index}/>
                    )}

                  </tr>
                  )}
            </tbody>
     </table> */}
      
    </div>
  );
}

export default Calendar;