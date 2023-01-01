import { render, screen } from '@testing-library/react';
import NotFound from "./NotFound";

test("renders NotFound", () => {
  render(
    <NotFound/>
  );
  const linkElement = screen.getByText(/Error 404 - Page Not Found/i);
  expect(linkElement).toBeInTheDocument();
});
