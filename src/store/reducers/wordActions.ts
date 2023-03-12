import {ThunkAction} from "redux-thunk";
import {IWord} from "../../types/word";

export const SET_WORD = 'SET_WORD'
export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'


const setWord = (word: IWord) => ({
    type: SET_WORD,
    payload: word
})
const setLoading = () => ({
    type: SET_LOADING,

})
const setError = (err: string) => ({
    type: SET_ERROR,
    payload: err
})




export const loadWord = (word: string): ThunkAction<void, any, { client: any, api: any }, any> => {
    return (dispatch: any, _: any, { client }: any) => {
        dispatch(setLoading())
        client.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
             .then(({ data }: any) => dispatch(setWord(data[0])))
            // .then(({ data }: any) => console.log(data))
            .catch((err: any) => dispatch(setError(err.message)))
    }
}