import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './App.css';
import Filter from './components/Filter';
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
          <Revenue />
        </FilterProvider>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
