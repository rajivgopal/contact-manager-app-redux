import React, { useState } from "react";
import TextBox from "../utils/TextBox";
import uuid from "uuid";
// import axios from "axios";
import { addContactFromStore } from "../../Store/ActionCreators";
import store from "../../Store/store";

const AddContact = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState({});

  const onChange = event => {
    const { name, value } = event.target;
    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "phone") setPhone(value);
  };

  const addContact = event => {
    event.preventDefault();
    if (name === "") {
      setError({ name: "Name is required" });
      return;
    } else if (email === "") {
      setError({ email: "Email is required" });
      return;
    } else if (phone === "") {
      setError({ phone: "Phone is required" });
      return;
    }

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };
    // const response = await axios.post(
    //   `https://jsonplaceholder.typicode.com/users`,
    //   {
    //     name,
    //     email,
    //     phone
    //   }
    // );

    store.dispatch(addContactFromStore(newContact));

    setName("");
    setEmail("");
    setPhone("");
    setError({});

    props.history.push("/");
  };

  return (
    <div className="card card-mb3">
      <div className="card-header">Add Contact</div>
      <div className="card-body">
        <form onSubmit={event => addContact(event)}>
          <TextBox
            label="Name"
            name="name"
            className="form-control form-control-lg"
            type="text"
            placeholder="Enter name..."
            value={name}
            tbEvent={event => onChange(event)}
            error={error.name}
          />

          <TextBox
            label="Email"
            name="email"
            className="form-control form-control-lg"
            type="email"
            placeholder="Enter email..."
            value={email}
            tbEvent={event => onChange(event)}
            error={error.email}
          />
          <TextBox
            label="Phone"
            name="phone"
            className="form-control form-control-lg"
            type="text"
            placeholder="Enter phone..."
            value={phone}
            tbEvent={event => onChange(event)}
            error={error.phone}
          />
          <input
            className="btn btn-light btn-block"
            type="submit"
            value="Add Contact"
          />
        </form>
      </div>
    </div>
  );
};

export default AddContact;
