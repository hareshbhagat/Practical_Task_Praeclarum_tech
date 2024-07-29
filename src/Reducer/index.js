import { combineReducers } from '@reduxjs/toolkit';
import globalReducer from "./globalReducer";
import LoadingStatusReducer from "./LoadingStatusReducer";


const reducersObj = {
    globalReducer:globalReducer,
    LoadingStatusReducer:LoadingStatusReducer,
};

const reducers = combineReducers(reducersObj);

export default reducers;
