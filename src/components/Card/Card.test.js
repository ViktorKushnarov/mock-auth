import { render, screen } from '@testing-library/react';
import Card from "./Card";

test("renders Card", () => {
  render(<Card className="custom-class">Test text</Card>);
  const linkElement = screen.getByText(/Test text/i);
  expect(linkElement).toBeInTheDocument();
});
