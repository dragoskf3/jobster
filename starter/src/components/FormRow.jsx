import React from "react";

function FormRow({ name, type, value, handleChange, labelText }) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="form-input"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}

export default FormRow;
