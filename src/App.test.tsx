import { render, screen } from '@testing-library/react';
import App from './App';

test('Has a revenue toggle', () => {
  render(<App />);
  const revenueToggle = screen.getByRole('radio', { name: /revenue/i });
  expect(revenueToggle).toBeInTheDocument();
});
test('Has a margin toggle', () => {
  render(<App />);
  const marginToggle = screen.getByRole('radio', { name: /margin/i });
  expect(marginToggle).toBeInTheDocument();
});
