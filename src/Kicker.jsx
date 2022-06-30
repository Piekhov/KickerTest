import React, { useState, useEffect } from "react";
import CalendarKicker from "./CalendarKicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {useSelector} from 'react-redux';
import { useDispatch } from "react-redux";
import { getDays } from "./store/KickerSlice";
import DeleteIcon from '@mui/icons-material/Delete';
import { grey, green, red, blue, white, purple } from "@mui/material/colors";


function Kicker() {
  const [date, setDate] = React.useState(new Date());
  
  const months = ["Januar", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
  let [year, setYear] = useState(new Date().getFullYear());
  console.log(year)

  const {days} = useSelector((state) => state.day);
  // console.log(days)
  // const dayIndex = state.day.findIndex(day => {return day.id === state.day.dayId});

  const dispatch = useDispatch();
  useEffect (() => {
    if (!days.length) {
      dispatch(getDays(year))
    }
    console.log(days)
  }, [days]);

  function previos() {
    setYear(year -= 1);
  }
  function next() {
    setYear(year += 1);
  }
  return (
    <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid container spacing={1}>
            <Grid
              item 
              sx={{margin: "auto",}}>
              <Box>
                <Button className="Back_Next" size="small" onClick={previos} 
                sx={{color: purple[500]}} 
                >{year-1}</Button>
                <Button className="Year" size="medium" variant="contained" 
                sx={{ backgroundColor: purple[500], color: grey[50] }}
                >{" "}{year}{" "}</Button>
                <Button className="Back_Next" size="small" onClick={next}
                sx={{color: purple[500]}}
                >{year+1}</Button>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            {months.map((month, i) => (
              <Grid item key={month}>
                <CalendarKicker month={i} dateYearPicker={year}/>
              </Grid>
            ))}
          </Grid>
        </LocalizationProvider>
    </div>
  );
}
export default Kicker;
