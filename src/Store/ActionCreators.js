import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FETCH_CONTACTS,
  ADD_CONTACTS
} from "./ActionTypes";

const addContactFromStore = contact => ({
  type: ADD_CONTACT,
  payload: contact
});

const deleteContactFromStore = id => ({
  type: DELETE_CONTACT,
  payload: id
});

const doAddContacts = contacts => ({
  type: ADD_CONTACTS,
  contacts
});

const doFetchContacts = () => ({
  type: FETCH_CONTACTS
});

export {
  addContactFromStore,
  deleteContactFromStore,
  doAddContacts,
  doFetchContacts
};
