import {createStore, applyMiddleware, StoreEnhancer, Store} from "redux";
// import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

export {IStore} from "Reducers";

import reducers from "Reducers";

const middleware: StoreEnhancer = applyMiddleware(ReduxThunk);
const Store: Store = createStore(reducers, middleware);

export default Store;