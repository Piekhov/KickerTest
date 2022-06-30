import React, { useEffect } from "react";
import { StaticDatePicker } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "./kicker.css";
import { useDispatch } from "react-redux";
import { getDays, res } from "./store/KickerSlice";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { grey, green, red, blue, white, purple, lime } from "@mui/material/colors";
import { getMonth, isToday } from "date-fns";
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { styled } from '@mui/material/styles';
import { color } from "@mui/system";



export default function StaticDatePickerDemo(props) {
  const [value, setDate] = React.useState(new Date());
  
 
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    setDate(new Date(props.dateYearPicker, props.month));
  }, [props.dateYearPicker]);
  
  const CustomPickersDay = styled(PickersDay, {
    shouldForwardProp: (prop) =>
      prop !== 'pastDays' && prop !== 'futureDays' && prop !== 'today' && prop !== 'goodDays',
  })(({ theme, pastDays, futureDays, today, goodDays}) => ({
    ...(pastDays && {
      borderRadius: '50%',
      alignItems: 'center',
      backgroundColor: grey[200],
      width: '36px',
    }),
    ...(futureDays),
    ...(today && {
      borderRadius:'50%',
      backgroundColor: purple[500],
      color: theme.palette.common.white,
    }),
    ...(goodDays && {
      borderRadius:'50%',
      backgroundColor: green[500],
      color: theme.palette.common.white,
    })
  }));
   
   
    let pDays = new Date();
    pDays.setDate(pDays.getDate() - 1);

    let gDays = ['2022-06-20']
    // console.log(gDays)

    const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
      
      console.log(selectedDates)
    //   let dayFilter = day.filter(day => { 
    //     return day.date===date
    // })
    //   console.log(dayFilter)
  
      // if (!date) {
      //   return <PickersDay {...pickersDayProps} />;
      // }
      
      let isPastDays=pDays>date
      let isGoodDays = gDays.includes()
      return (
        <Paper>
          <Grid item>
            <Grid item>
        <CustomPickersDay
          {...pickersDayProps}
          pastDays={isPastDays}
          goodDays={isGoodDays}
          disableMargin={false}
          selected = {false}
          showDaysOutsideCurrentMonth={false}
        />
            </Grid>
          </Grid>
        </Paper>
      );
    };
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        openTo="day"
        label="Date desktop"
        value={value}
        variant='static'
        showDaysOutsideCurrentMonth={false}
        onChange={(newDate) => {
          setDate(newDate);
        }}
        renderDay={renderWeekPickerDay}
        // onChange={() => dispatch(getDays())}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
  
}
