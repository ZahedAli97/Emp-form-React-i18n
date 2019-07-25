import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import EmployeeFormReducer from "../reducer/EmployeeForm";
import { employeeSagaWatcher } from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  EmployeeFormReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(employeeSagaWatcher);

export default store;
