import { render, screen } from "@testing-library/react";
import {
  NotificationWarning,
  NotificationFailure,
  NotificationSuccess,
} from "./Notification";

test("renders NotificationWarning", () => {
  render(<>{NotificationWarning("test warning")}</>);
  const linkElement = screen.getByText(/test warning/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders NotificationFailure", () => {
  render(<>{NotificationFailure("test failure")}</>);
  const linkElement = screen.getByText(/test failure/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders NotificationSuccess", () => {
  render(<>{NotificationSuccess("test success")}</>);
  const linkElement = screen.getByText(/test success/i);
  expect(linkElement).toBeInTheDocument();
});
