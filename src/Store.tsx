import {createStore, applyMiddleware, StoreEnhancer, Store} from "redux";
// import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

import reducers from "Reducers/combinedReducers";

const middleware: StoreEnhancer = applyMiddleware(ReduxThunk);
const store: Store = createStore(reducers, middleware);

export default store;