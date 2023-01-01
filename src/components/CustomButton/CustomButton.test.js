import { render, screen } from '@testing-library/react';
import CustomButton from "./CustomButton";

test("renders loading CustomButton", () => {
  const isLoading = true;
  render(
    <CustomButton type="submit" isLoading={isLoading}>
      Login
    </CustomButton>
  );
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});

test("renders CustomButton", () => {
  const isLoading = false;
  render(
    <CustomButton type="submit" isLoading={isLoading}>
      Login
    </CustomButton>
  );
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
