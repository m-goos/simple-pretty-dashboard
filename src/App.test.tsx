import { render, screen } from '@testing-library/react';
import App from './App';

/** @TODO fix error of conflicting testing-library packages */

describe('App', () => {
  test('has a radio group to toggle financial filters', () => {
    render(<App />);

    const radiogroup = screen.getByRole('radiogroup', { name: /financial/i });
    const marginToggle = screen.getByRole('radio', { name: /margin/i });
    const revenueToggle = screen.getByRole('radio', { name: /margin/i });

    expect(radiogroup).toBeInTheDocument();
    expect(marginToggle).toBeInTheDocument();
    expect(revenueToggle).toBeInTheDocument();
  });
});

/**
 *  waiting (`await / waitFor..`) here leads to problems, because
 * 'canvas' needs to be set up for jest/rtl to render..
 */

//   test('loads and displays an error (because there is no mocked API)', async () => {
//     render(<App />);
//     const loadingText = screen.getAllByText(/loading/i);

//     // expect at least one component in loading state
//     expect(loadingText).not.toHaveLength(0);

//     // expect loadingText to disapper
//     await waitForElementToBeRemoved(() => screen.queryAllByText(/loading/i));
//   });
