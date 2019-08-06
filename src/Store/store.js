import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import ContactReducer from "./ContactReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const logger = createLogger();
const saga = createSagaMiddleware();
const store = createStore(
  ContactReducer,
  undefined,
  applyMiddleware(saga, logger)
);

saga.run(rootSaga);
export default store;
