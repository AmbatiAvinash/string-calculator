import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/String Calculator/i);
  expect(linkElement).toBeInTheDocument();
});

test("ADD button to be displayed", () => {
  const addNumsBtn = screen.getByRole("button");
  expect(addNumsBtn).toBeInTheDocument();
});
