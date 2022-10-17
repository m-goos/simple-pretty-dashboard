import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './App.css';
import TopCustomersTable from './components/TopCustomersTable';
import Filter from './components/Filter';
import InvoicesCumulative from './components/InvoicesCumulative';
import InvoiceTable from './components/InvoiceTable';
import Navbar from './components/Navbar';
import CategoriesRevenue from './components/CategoriesRevenue';
import { FilterProvider } from './context/filterContext';
import StatisticCard from './components/StatisticCard';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-50">
        <Navbar />
        {/* responsive wrapper */}
        <div className="sm:px-14 sm:py-4 md:px-20 xl:px-6">
          <div className="hidden xl:block">
            <StatisticCard />
          </div>
          <FilterProvider>
            <Filter />
            <div className="px-6 pt-4 sm:px-0 xl:hidden">
              <StatisticCard />
            </div>
            <div className="grid grid-cols-1 space-y-4 py-4 px-6 sm:py-0 sm:px-0 sm:pt-2 lg:space-y-6 lg:pt-4 xl:grid-cols-2 xl:gap-x-6 xl:pt-0">
              <InvoicesCumulative />
              <CategoriesRevenue />
              <InvoiceTable />
              <TopCustomersTable />
            </div>
          </FilterProvider>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
