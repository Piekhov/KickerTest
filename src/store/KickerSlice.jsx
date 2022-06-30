import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import {daysAPI} from '../service/daysService'

const initialState = {
  days: [],
  isTaskLoading: false,
  taskError: false
};
export const getDays = createAsyncThunk('day/getDays', async(year, { rejectWithValue}) => {
  try {
    const res = await daysAPI(year);
    return res.data;
  } catch (e) {
    return rejectWithValue(e.res.year.errors || 'Unexpected error');
  }
})
export const KickerSlice = createSlice({
  name: "day",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.days = action.payload;
    },
    
  },
  extraReducers:{
      [getDays.fulfilled]: (state, action) => {
        state.days = [...state.days, action.payload];
        state.isTaskLoading = false;
        state.taskError = false;
        console.log('fulfilled')
      },
      [getDays.pending]: () => console.log('pending'),
      [getDays.rejected]: () => console.log('rejected'),
    },
});
export const { setValue } = KickerSlice.actions;
export default KickerSlice.reducer;
