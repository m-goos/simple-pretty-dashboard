// import { renderHook } from '@testing-library/react-hooks/server';
// import { server } from '../setupTests';
import useInvoices from './useInvoices';
import { createWrapper } from '../../mocks/utils';
import { waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

describe('useInvoices hook', () => {
  test('calls useInvoices', async () => {
    const { result } = renderHook(() => useInvoices(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result?.current?.data?.[0]?.customer_name).toContain('Jack Cook');
  });
});
