import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import userAuthReducer from "./modules/userAuth/reducer";
import techsReducer from "./modules/techs/reducer";

import thunk from "redux-thunk";

const reducer = combineReducers({
  user: userAuthReducer,
  techs: techsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
