import React, { useState} from 'react';
import classnames from 'classnames';
import "./calendar.css";
import { red } from '@mui/material/colors';



function MonthCalendar (props) {
    let [date, setDate] = useState(new Date());

    const monthNames = ["Januar", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];

    const weekNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    let newYear = props.newYear
    let month = props.month
    let day = props.day
   
    let currentDate = new Date (newYear, month);
    let currentDays = new Date (newYear, month, day)

    let nextCurrentDate = new Date (newYear, month+1);
    let prevCurrentDate = new Date (newYear, month-1);
    let diff = Math.round((nextCurrentDate-currentDate)/(1000*3600*24));
    let diffPrev = Math.round((currentDate-prevCurrentDate)/(1000*3600*24));
    
    let index = (currentDate.getDay()+6) % 7
    let indexPrev = (currentDate.getDay()+5) % 7

    
    function currentDay (a, b) {
        if (!a || !b) return false;
        return (
            a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth() &&
            a.getDate() === b.getDate()
        );
    };
    
    function HandleDayClick (currentDays) {
        // setDate()
        console.log(currentDays)
        
      };

    const rows = 6;
    const cols = 7;

    let table = [],
    tr,
    k = 1 - index,
    f= k - diff,
    today = date,
    t = today.getDate(),
    p = diffPrev-(indexPrev)
   
    for (let i = 0; i < rows; i++) {
        tr = [];
        for (let j = 0; j < cols; j++) {
            const day = k > 0 && k <= diff ? k : (k>diff ? f : (k<diff ? p : '' ))
            tr.push(
            <td className={ k > 0 && k <= diff ? classnames('td', 
            {'today' : currentDay (date, currentDays)&& t===k},
            ) : classnames('daysOutsideCurrentMonth')}
            
            onClick={() => HandleDayClick(day)}>{day}</td>);
            k++;
            f++;
            p++;
        }
        table.push(<tr className='day'>{tr}</tr>)
    
    }  
    table.onmouseover = function(event) {
        let target = event.target;
        target.style.background = 'grey';
      };
    return (
        <div className='month'>
        
        <header className='monthNames'>
               {monthNames[month]}
        </header> 
        <table id='table'>
            <thead>
                <tr>
                    {weekNames.map((name) => 
                        <th key={name} className='weekNames'>
                             {name} 
                        </th>
                    )}
                </tr>
            </thead>
            <tbody className='day'>
                {table}
            </tbody>
        </table>
        </div>
    )
}
export default MonthCalendar;