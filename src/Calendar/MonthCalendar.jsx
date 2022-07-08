import React, { useState} from 'react';
import classnames from 'classnames';
import "./calendar.css";
import { Typography } from '@mui/material';




function MonthCalendar (props) {
    let [date, setDate] = useState(new Date());


    const monthNames = ["Januar", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];

    const weekNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    let newYear = props.newYear
    
    let month = props.month
 
    let day = props.day

    
   
    
    let currentDate = new Date (newYear, month, day);
    console.log(currentDate)
    let nextCurrentDate = new Date (newYear, month+1, day);
    let prevCurrentDate = new Date (newYear, month-1, day);
    let diff = Math.round((nextCurrentDate-currentDate)/(1000*3600*24));
    let diffPrev = Math.round((currentDate-prevCurrentDate)/(1000*3600*24));

    
    let index = currentDate.getDay() //+ 6) % 7

    function currentDay (a, b) {
        if (!a || !b) return false;

        return (
            a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth() &&
            a.getDate() === b.getDate()

        );
    };
    function HandleDayClick () {
        setDate(currentDate)
      };
    


    
    


    const rows = 6;
    const cols = 7;

    let table = [],
    tr,
    k = 1 - index,
    today = date,
    t = today.getDate(),
    
    f= k - diff,
    p = diffPrev-(index-1)
    
   

    for (let i = 0; i < rows; i++) {
        tr = [];
        for (let j = 0; j < cols; j++) {
            tr.push(<td className={ k > 0 && k <= diff ? classnames('day', {'today' : currentDay (currentDate, date)&& t===k}) : classnames('daysOutsideCurrentMonth')}
            // onClick={HandleDayClick}
            // onClick={HandleOnChange}
            >
               
                {k > 0 && k <= diff ? k : (k>diff ? f : (k<diff ? p : '' ))}
               
                </td>);
            k++;
            f++;
            p++;
            
        }
        table.push(<tr className='day'>{tr}</tr>)
    }
    // function HandleOnChange (newValue) {
    //     setDate(date);
    //     console.log(date)
    //   };
    
    
    return (
        <div className='month'>
        
        <header className='monthNames'>
               {monthNames[month]}
        </header> 
        <table>
            <thead>
                <tr>
                    {weekNames.map((name) => 
                        <th key={name} className='weekNames'>
                            <Typography> {name} </Typography>
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