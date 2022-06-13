import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import userAuthReducer from "./modules/userAuth/reducer";

import thunk from "redux-thunk";

const reducer = combineReducers({
  user: userAuthReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
