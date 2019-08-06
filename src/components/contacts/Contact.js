import React, { useState } from "react";
import PropTypes from "prop-types";
import { deleteContactFromStore } from "../../Store/ActionCreators";
import { connect } from "react-redux";
// import axios from "axios";

const Contact = props => {
  const { deleteInfo } = props;
  const { id, name, email, phone } = props.contact;
  const [showContactInfo, setShowContactInfo] = useState(true);

  const showInfo = () => {
    setShowContactInfo(!showContactInfo);
  };

  return (
    <div className="card card-body mb-3">
      <h4>
        {name}
        <i
          className="fas fa-sort-down"
          onClick={showInfo}
          style={{ cursor: "pointer" }}
        />
        <i
          className="fas fa-times"
          style={{ cursor: "pointer", float: "right", color: "red" }}
          onClick={event => deleteInfo(id)}
        />
      </h4>
      {showContactInfo ? (
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      ) : null}
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  deleteInfo: id => dispatch(deleteContactFromStore(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Contact);
