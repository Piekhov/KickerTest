import React from "react";
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import endOfWeek from 'date-fns/endOfWeek';
import isSameDay from 'date-fns/isSameDay';
import isWithinInterval from 'date-fns/isWithinInterval';
import startOfWeek from 'date-fns/startOfWeek';
import { grey, green, red, blue, white, purple, lime } from "@mui/material/colors";
import AcUnitIcon from '@mui/icons-material/AcUnit';

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== 'pastDays' && prop !== 'futureDays' && prop !== 'today',
})(({ theme, pastDays, futureDays, today}) => ({
  ...(pastDays && {
    borderRadius: '50%',
    backgroundColor: grey[300],
    
    // color: theme.palette.common.lime,
    // '&:hover, &:focus': {
    //   backgroundColor: theme.palette.primary.lime,
    // },
  }),
  ...(futureDays),
  ...(today && {
    borderRadius:'50%',
    backgroundColor: purple[600],
    color: theme.palette.common.white,
  }),
}));
export default function CustomDay() {
  const [value, setValue] = React.useState(new Date());
 
  let pDays = new Date();
  pDays.setDate(pDays.getDate() - 1);
  let tDays = new Date ();
  tDays.setDate(tDays.getDate())

  const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
    if (!value) {
      return <PickersDay {...pickersDayProps} />;
    }

    let isPastDays=pDays>date
    let isToday = tDays
    
    return (
      <CustomPickersDay
        {...pickersDayProps}
        pastDays={isPastDays}
        AcUnitIcon
        // today = {isToday}
        showDaysOutsideCurrentMonth={false}
      />
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        label="Week picker"
        value={value}
        outsideCurrentMonth = {false}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderDay={renderWeekPickerDay}
        renderInput={(params) => <TextField {...params} />}
        inputFormat="'Week of' MMM d"
      />
    </LocalizationProvider>
  );
}