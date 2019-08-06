import React from "react";
import Contact from "./Contact";
import { connect } from "react-redux";

const Contacts = ({ contacts }) => {
  return (
    <>
      <h1 className="display-4 mb-2">
        <span className="text-danger">Contact</span> List
      </h1>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </>
  );
};

const mapStateToProps = state => ({
  contacts: [...state]
});

export default connect(mapStateToProps)(Contacts);
