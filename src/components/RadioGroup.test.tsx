import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RadioGroup from './RadioGroup';

const radioOptions = ['margin', 'revenue'];
const radioGroupLabel = 'Financial filters';

describe('RadioGroup', () => {
  it('renders a radio group', () => {
    const handleChange = jest.fn();
    render(
      <RadioGroup
        options={radioOptions}
        onChange={handleChange}
        radioGroupLabel={radioGroupLabel}
      />
    );

    const radioGroup = screen.getByRole('radiogroup', {
      name: radioGroupLabel,
    });

    expect(radioGroup).toBeInTheDocument();
  });
  it('lets the user select a value', () => {
    // ARRANGE
    const handleChange = jest.fn();
    render(
      <RadioGroup
        options={radioOptions}
        onChange={handleChange}
        radioGroupLabel={radioGroupLabel}
      />
    );

    const revenueButton = screen.getByRole('radio', { name: 'revenue' });
    const marginButton = screen.getByRole('radio', { name: 'margin' });

    // ACT
    userEvent.click(revenueButton);

    // ASSERT
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(revenueButton).toBeChecked();
    expect(marginButton).not.toBeChecked();
  });
});
