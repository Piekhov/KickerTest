// import React, {useState} from 'react';
// import { makeStyles } from '@mui/styles';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import CloudIcon from '@mui/icons-material/Cloud';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';



// export const styles = makeStyles(() => ({

//     notInThisMonthDayPaper: {
//         width: "35px",
//         height: "35px",
//         backgroundColor: "#eeeeee",
//         margin: "3px",
//         boxShadow: "none",
//         borderRadius: 0,
//         padding: "1px",
//     },
//     normalDayPaper: {
//         width: "35px",
//         height: "35px",
//         backgroundColor: "#e8f5e9",
//         margin: "3px",
//         boxShadow: "none",
//         borderRadius: 0,
//         padding: "1px",
//         cursor: "pointer",
//     },
//     selectedDayPaper: {
//         width: "31px",
//         height: "31px",
//         backgroundColor: "#f9fbe7",
//         margin: "3px",
//         boxShadow: "none",
//         borderRadius: 0,
//         borderStyle: "solid",
//         borderWidth: "2px",
//         borderColor: "lime",
//         padding: "1px",
//         cursor: "pointer",
//     },
//     todayPaper: {
//         width: "35px",
//         height: "35px",
//         backgroundColor: "lightGreen",
//         margin: "3px",
//         boxShadow: "none",
//         borderRadius: 0,
//         padding: "1px",
//         cursor: "pointer",
//         color: " white",
//     },

// }));

// export default function CustomCalendar() {
//     const [selectedDate, handleDateChange] = useState(new Date());
//     const classes = styles();
//     const today = new Date();
//     const sunnyDays = [1, 6, 10, 24, 15]
//     const cloudyDays = [ 30, 4, 13,21]
//     const snowyDays = [25,3,12,11,27]

//     function getDayElement(day, selectedDate, isInCurrentMonth, dayComponent) {
//         const isSunny = sunnyDays.includes(day.getDate());
//         const isCloudy = cloudyDays.includes(day.getDate());
//         const isSnow = snowyDays.includes(day.getDate());
//         const isSelected = day.getDate() === selectedDate.getDate();
//         const isToday = day.getDate() === today.getDate() && day.getMonth() === today.getMonth();
//         console.log(day.getTime())
//         let dateTile
//         if (isInCurrentMonth) {
//             if (isSunny) {
//                 dateTile = (
//                     <Paper
//                         className={
//                             isSelected ? classes.selectedDayPaper : isToday ? classes.todayPaper : classes.normalDayPaper
//                         }
//                     >
//                         <Grid item>
//                             <WbSunnyIcon style={{color: "orange"}}/>
//                         </Grid>
//                         <Grid item>
//                             {day.getDate()}
//                         </Grid>
//                     </Paper>)
//             } else if (isCloudy) {
//                 dateTile = (<Paper
//                     className={isSelected ? classes.selectedDayPaper : isToday ? classes.todayPaper : classes.normalDayPaper}
//                 >
//                     <Grid item>
//                         <CloudIcon style={{color: "gray"}}/>

//                     </Grid>
//                     <Grid item> {day.getDate()}</Grid>
//                 </Paper>)
//             } else if (isSnow) {
//                 dateTile = (
//                     <Paper
//                         className={isSelected ? classes.selectedDayPaper : isToday ? classes.todayPaper : classes.normalDayPaper}
//                     >
//                         <Grid item>
//                             <AcUnitIcon style={{color: "#3d5afe"}}/>
//                         </Grid>
//                         <Grid item> {day.getDate()}</Grid>
//                     </Paper>
//                 )
//             } else {
//                 dateTile = (<Paper
//                     className={isSelected ? classes.selectedDayPaper : isToday ? classes.todayPaper : classes.normalDayPaper}
//                 >
//                     <Grid item>
//                         <br/>
//                     </Grid>
//                     <Grid item> {day.getDate()}</Grid>
//                 </Paper>)
//             }

//         } else {
//             dateTile = (<Paper className={classes.notInThisMonthDayPaper}>
//                 <Grid item>
//                     <br/>
//                 </Grid>
//                 <Grid item style={{color: "lightGrey"}}>
//                     {day.getDate()}
//                 </Grid>
//             </Paper>)
//         }
//         return dateTile
//     }

//     return (
//         <div>
//             <LocalizationProvider dateAdapter={AdapterDateFns}>
                
//                     <DatePicker
//                         value={selectedDate}
//                         onChange={handleDateChange}
//                         variant="static"
//                         renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) => getDayElement(day, selectedDate, isInCurrentMonth, dayComponent)}
//                     />

               
//             </LocalizationProvider>

//         </div>
//     );
// }

//========================

  // today.getDate()
  // console.log(today.getDate())
  // let isToday = day.getDate() === today.getDate() && day.getMonth() === today.getMonth();
  // day, date, dayInCurrentMonth, dayComponent
    

 

  // function getDayElement(day, selectedDate, pickersDayProps) {
  //   let today = new Date()
  //   // console.log(day.getMonth())

  //   if (!date) {
  //     return <PickersDay {...pickersDayProps} 
  //     />;
  //   }
    
    
  //   let dateTile      
  //     if (pastDays>day) {
  //       return (
  //       dateTile = (
  //         <Paper
  //           showDaysOutsideCurrentMonth={false}
  //           className="PastDays"
  //           sx={{ backgroundColor: grey[200]}}>
  //           <Grid item></Grid>
  //           <Grid item onChange={() => dispatch(getDays())}>
  //             {day.getDate()}
  //           </Grid>
  //         </Paper>
  //       )
  //       );
  //     } else if (today>day) {
  //         dateTile = (
  //           <Paper className='today'>
  //             <Grid item></Grid>
  //             <Grid item onChange={() => dispatch(getDays())}>
  //               {day.getDate()}
  //             </Grid>
  //           </Paper>
  //         );
  //     } else {
  //       return (
          
  //         dateTile = (
  //           <Paper>
  //             <Grid item>
  //               <Grid
  //                 item
  //                 className="FutureDays"
  //                 onChange={() => dispatch(getDays())}>
  //                 {day.getDate()}
  //               </Grid>
  //             </Grid>
  //           </Paper>
  //         )
  //       );
   
  //     }  

  //   // if (pickersDayProps === today) {
  //   //   return;
  //   // } else {
  //   //     return (
  //   //     dateTile = (
  //   //       <Paper
  //   //         className="notInThisMonthDay">
  //   //         <Grid item></Grid>
  //   //         <Grid item onChange={() => dispatch(getDays())}>
  //   //           {day.getDate()}
  //   //         </Grid>
  //   //       </Paper>
  //   //       )
  //   //     )
  //   //     }
      
  //   return dateTile;
 
  //   }

  // const dispatch = useDispatch()