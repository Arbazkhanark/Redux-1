
import {createStore} from "redux";
import { countReducer } from "../reducer/countReducer";

export const myStore=createStore(countReducer);