import React from "react";
import "./Form.css";

import Form from "react-bootstrap/Form";

const FormGroup = ({ label, name, value, placeholder, type, onChange }) => {
  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </Form.Group>
  );
};

export default FormGroup;
