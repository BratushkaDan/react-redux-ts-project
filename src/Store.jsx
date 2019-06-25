import { createStore, applyMiddleware } from "redux";
// import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

import reducers from "./app/reducers/CombinedReducers";

const middleware = applyMiddleware(ReduxThunk);
const store = createStore(reducers, middleware);

export default store;