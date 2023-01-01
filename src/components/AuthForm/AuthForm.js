import React from 'react'
import { Form } from "react-bootstrap";
import CustomButton from "../CustomButton/CustomButton";
import Input from "../Input/Input";
import classes from './AuthForm.module.css'

const AuthForm = ({
  submitHandler,
  isLogin,
  formState,
  handleChange,
  isLoading,
  switchAuthModeHandler,
}) => {
  return (
    <Form onSubmit={submitHandler}>
      {!isLogin && (
        <>
          <Input
            className={classes.control}
            id="firstName"
            type="text"
            label="First Name"
            required={true}
            value={formState.firstName}
            onChange={handleChange}
          />
          <Input
            className={classes.control}
            id="lastName"
            type="text"
            label="Last Name"
            required={true}
            value={formState.lastName}
            onChange={handleChange}
          />
        </>
      )}
      <Input
        className={classes.control}
        id="email"
        type="email"
        label="Your Email"
        value={formState.email}
        required={true}
        onChange={handleChange}
      />
      <Input
        className={classes.control}
        id="password"
        type="password"
        label="Your Password"
        required={true}
        minLength={7}
        value={formState.password}
        onChange={handleChange}
      />
      <div className={classes.actions}>
        <CustomButton type="submit" isLoading={isLoading}>
          {isLogin ? "Login" : "Create Account"}
        </CustomButton>
        <CustomButton
          size="sm"
          variant="light"
          type="button"
          className={classes.toggle}
          onClick={switchAuthModeHandler}
        >
          {isLogin ? "Create new account" : "Login with existing account"}
        </CustomButton>
      </div>
    </Form>
  );
};

export default AuthForm;