import React from "react";
import Form from "react-bootstrap/Form";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <Form.Group className={`${classes.control} ${props.className}`}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type={props.type}
        id={props.id}
        name={props.id}
        required={props.required}
        minLength={props.minLength}
        value={props.value}
        onChange={props.onChange}
      />
    </Form.Group>
  );
};

export default Input;
