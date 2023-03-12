import {combineReducers} from "redux";
import {wordReducer} from "./reducers/wordReducer";


export const rootReducer = combineReducers({
    wordReducer
})

export type RootState = ReturnType<typeof rootReducer>