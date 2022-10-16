import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

import './App.css';
import Filter, { TFinancialFilter } from './components/Filter';
import Navbar from './components/Navbar';
import Revenue from './components/Revenue';

const queryClient = new QueryClient();

function App() {
  const [financialFilter, setFinancialFilter] =
    useState<TFinancialFilter>('margin');
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen bg-gray-100 sm:bg-orange-600">
        <Navbar />
        <Filter setFinancialFilter={setFinancialFilter} />
        <Revenue financialFilter={financialFilter} />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
