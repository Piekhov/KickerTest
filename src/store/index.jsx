import { configureStore } from "@reduxjs/toolkit";
import KickerSlice from './KickerSlice'


export const store = configureStore ({
    reducer:{
        day: KickerSlice,
    },
});