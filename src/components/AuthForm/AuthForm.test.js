import React from "react";
import { render, screen } from "@testing-library/react";
import AuthForm from "./AuthForm";


const submitHandler = jest.fn();
const handleChange = jest.fn();
const switchAuthModeHandler = jest.fn();
const formState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

test("renders Signup AuthForm", () => {
  render(
    <AuthForm
      submitHandler={submitHandler}
      isLogin={false}
      formState={formState}
      handleChange={handleChange}
      isLoading={false}
      switchAuthModeHandler={switchAuthModeHandler}
    />
  );

expect(screen.getByText("First Name")).toBeInTheDocument();
expect(screen.getByText("Last Name")).toBeInTheDocument();
expect(screen.getByText("Your Email")).toBeInTheDocument();
expect(screen.getByText("Your Password")).toBeInTheDocument();

expect(screen.getByText("Login with existing account")).toBeInTheDocument();
expect(screen.getByText("Create Account")).toBeInTheDocument();
});


test("renders Login AuthForm", () => {
  render(
    <AuthForm
      submitHandler={submitHandler}
      isLogin={true}
      formState={formState}
      handleChange={handleChange}
      isLoading={false}
      switchAuthModeHandler={switchAuthModeHandler}
    />
  );

  expect(screen.getByText("Your Email")).toBeInTheDocument();
  expect(screen.getByText("Your Password")).toBeInTheDocument();

  expect(screen.getByText("Create new account")).toBeInTheDocument();
  expect(screen.getByText("Login")).toBeInTheDocument();
});
