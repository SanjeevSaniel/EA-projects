import React, { useState } from "react";
import "./Form.css";
// import Button from "@mui/material/Button";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormGroup from "./FormGroup";

const Login = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(account);

    console.log("Submitted");
  };

  const handleChange = ({ currentTarget: input }) => {
    const acnt = { ...account };
    acnt[input.name] = input.value;
    setAccount({ acnt });
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <FormGroup
        label="Email address"
        name="email"
        placeholder="Enter email"
        type="text"
        onChange={handleChange}
      />

      <FormGroup
        label="Password"
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleChange}
      />

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;
