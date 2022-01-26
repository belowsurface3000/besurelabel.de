import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";

export const allReducers = combineReducers({
    userReducer: usersReducer,
})