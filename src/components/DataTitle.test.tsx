import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { screen, render } from '@testing-library/react';

import DataTitle from './DataTitle';

const title = 'Cumulative monthly invoice margin';

describe('Datatitle', () => {
  it('show a title', () => {
    render(<DataTitle title={title} icon={<DocumentTextIcon />} />);

    const invoiceTitle = screen.getByRole('heading', {
      level: 2,
      name: /invoice/i,
    });
    expect(invoiceTitle).toBeInTheDocument();
  });
});
