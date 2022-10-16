import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './App.css';
import Filter from './components/Filter';
import InvoicesCumulative from './components/InvoicesCumulative';
import Navbar from './components/Navbar';
import Revenue from './components/Revenue';
import { FilterProvider } from './context/filterContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen bg-gray-100 sm:bg-orange-600">
        <Navbar />
        <FilterProvider>
          <Filter />
          <div className="space-y-2 px-4 py-2">
            <InvoicesCumulative />
            <Revenue />
          </div>
        </FilterProvider>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
