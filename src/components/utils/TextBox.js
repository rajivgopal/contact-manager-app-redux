import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextBox = props => {
  const {
    label,
    name,
    type,
    className,
    placeholder,
    value,
    tbEvent,
    error
  } = props;

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className={classnames(className, { "is-invalid": error })}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={tbEvent}
        error={error}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  tbEvent: PropTypes.func.isRequired,
  error: PropTypes.string
};

TextBox.defaultProps = {
  type: "textbox"
};

export default TextBox;
