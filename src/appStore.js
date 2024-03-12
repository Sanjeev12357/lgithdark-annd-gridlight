import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themslice"
const appStore=configureStore({
    reducer:{
        theme:themeReducer
    }
})

export default appStore;