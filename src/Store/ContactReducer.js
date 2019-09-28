import { ADD_CONTACT, DELETE_CONTACT, ADD_CONTACTS } from "./ActionTypes";

const INITIAL_STATE = [];

const addContact = (state, action) => {
  return [action.payload, ...state];
};

const deleteContact = (state, action) => {
  const newState = state.filter(contact => contact.id !== action.payload);
  return newState;
};

const addContacts = action => {
  return [...action.contacts];
};

const ContactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return addContact(state, action);
    case DELETE_CONTACT:
      return deleteContact(state, action);
    case ADD_CONTACTS:
      return addContacts(action);
    default:
      return [...state];
  }
};

export default ContactReducer;
