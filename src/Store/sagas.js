import { takeEvery, all } from "redux-saga/effects";
import { FETCH_CONTACTS } from "./ActionTypes";
import { handleFetchContacts } from "./handleFetchContacts";

function* watchall() {
  yield all([takeEvery(FETCH_CONTACTS, handleFetchContacts)]);
}

export default watchall;
