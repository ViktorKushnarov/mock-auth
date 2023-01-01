import React from 'react';
import {Spinner , Button } from "react-bootstrap";


const CustomButton = (props) => {
  return (
    <Button
      variant={props.variant ?? "dark"}
      size={props.size ?? "lg"}
      type={props.type || "button"}
      className={`${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.isLoading && (
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      )}
      {props.isLoading ? " Loading ..." : props.children}
    </Button>
  );
};

export default CustomButton;
