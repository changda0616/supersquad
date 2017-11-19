import { combineReducers } from "redux";
import characters from './character_reducers'
import  heroes  from "./hero_reducers";
import squaStates from "./squa_reducers";
const rootReducer = combineReducers({
    characters,
    heroes,
})

export default rootReducer