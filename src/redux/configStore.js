// setup Redux
import { applyMiddleware, combineReducers, createStore } from "redux";
import {FilmReducer} from './Reducer/FilmReducer';
import reduxThunk from "redux-thunk";
import { UserReducer } from './Reducer/UseReducer';
import { LoadingReducer } from "./Reducer/LoadingReducer";

const rootReducer = combineReducers({
// chua cac state cua ung dung
    FilmReducer,
    UserReducer,
    LoadingReducer
})

export const store = createStore(rootReducer,applyMiddleware(reduxThunk));