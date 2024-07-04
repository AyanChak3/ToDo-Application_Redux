
//Reducer imports
import todoReducer from './slices/todoSlice'
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({todo : todoReducer})

const store = configureStore({
    reducer : {
        todo : todoReducer
    },
    devTools : true
});
export default store;