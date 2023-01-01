import { render, screen } from '@testing-library/react';
import Unautorized from "./Unautorized";

test("renders Unautorized", () => {
  render(
    <Unautorized/>
  );
  const linkElement = screen.getByText(/Error 401 -Unautorized/i);
  expect(linkElement).toBeInTheDocument();
});
