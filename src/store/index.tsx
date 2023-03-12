import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from "./root-reducer";
import axios from "axios";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk.withExtraArgument({
            client: axios
        }))
    )
    );

export default store;