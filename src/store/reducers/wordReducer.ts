import {WordActionTypes, WordState} from "../../types/wordState";
import {SET_WORD, SET_ERROR, SET_LOADING} from "./wordActions";

const initialState: WordState = {
    status: 'idle',
    error: null,
    word: {}
}

export const wordReducer = (state = initialState, action: WordActionTypes) => {
    switch (action.type) {
        case SET_WORD:
            return {
                ...state,
                status: 'received',
                word: action.payload

            }
        case SET_LOADING:
            return {
                ...state,
                status: 'loading',
                error: null
            }
        case SET_ERROR:
            return {
                ...state,
                status: "rejected",
                error: action.payload
            }
        default:
            return state
    }
}