import {SET_WORD, SET_ERROR, SET_LOADING} from "../store/reducers/wordActions";
import {IWord} from "./word";

interface ISETWord {
    type: typeof SET_WORD;
    payload: [];
}

interface ISetLoading {
    type: typeof SET_LOADING;
}

interface ISetError {
    type: typeof SET_ERROR;
    payload: string;
}

export interface WordState {
    status: 'idle' | 'loading' | 'rejected' | 'received',
    error: string | null
    word: IWord | {}
}

export type WordActionTypes =
    ISETWord
    | ISetLoading
    | ISetError;