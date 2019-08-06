import { call, put } from "redux-saga/effects";
import { doAddContacts } from "./ActionCreators";

const HN_BASE_URL = "https://jsonplaceholder.typicode.com/users";

const fetchContacts = () =>
  fetch(HN_BASE_URL).then(response => response.json());

function* handleFetchContacts() {
  const result = yield call(fetchContacts);
  yield put(doAddContacts(result));
}

export { handleFetchContacts };
