
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./state/counter";
export default configureStore({
    reducer:{
         count:countReducer
    }

})
