import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";
import { fileReducer } from "./fileReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    file: fileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;