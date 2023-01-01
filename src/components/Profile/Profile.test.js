import React from "react";
import { render, screen } from "@testing-library/react";
import Profile from "./Profile";

const user = {
  id: 9,
  first_name: "john",
  last_name: "doe",
  email: "john.doe@example.com",
  cognito_id: "d60f2361-635c-4851-9bb8-28defba7cc59",
  company_id: null,
  deleted_at: null,
  createdAt: "2022-12-31T00:36:48.000Z",
  updatedAt: "2022-12-31T00:36:48.000Z",
  CompanyId: null,
};

test("renders Loaded Profile", () => {
  render(<Profile user={user} isLoading={false} />);
  
  expect(screen.getByText("john doe")).toBeInTheDocument();
  expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();

});


test("renders placeholder Profile", () => {
  const {container} = render(<Profile user={user} isLoading={true} />);
  expect(container.querySelector("p")).toHaveClass(
    "placeholder-glow placeholder-lg"
  );
  expect(container.querySelector("span")).toHaveClass("col-12 placeholder");
});