import { render, screen } from '@testing-library/react';
import PlaceholderComponent from "./PlaceholderComponent";

test("renders PlaceholderComponent", () => {
  const { container } = render(<PlaceholderComponent />);
  expect(container.firstChild).toHaveClass("placeholder-glow placeholder-lg");
});
