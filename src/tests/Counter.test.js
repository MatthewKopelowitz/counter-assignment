import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMsg = screen.getByText(/Counter/i);
  expect(counterMsg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByText(/0/i);
  expect(count).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText("+");
  const count = screen.getByTestId("count");
  fireEvent.click(incrementButton);
  expect(count).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText("-");
  const count = screen.getByTestId("count");
  fireEvent.click(decrementButton);
  expect(count).toHaveTextContent("-1");
});






