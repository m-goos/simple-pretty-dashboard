import React, { createContext, ReactNode, useContext, useReducer } from 'react';

export type TFinancialFilter = 'revenue' | 'margin';
export type TTimeFilter = 'monthly' | 'weekly';
type Action = { type: 'changeFinancialFilter' } | { type: 'changeTimeFilter' };
type Dispatch = (action: Action) => void;

interface FilterProviderProps {
  children: ReactNode;
}

interface IFilters {
  financialFilter: TFinancialFilter;
  timeFilter: TTimeFilter;
}

interface IFilterContext {
  state: IFilters;
  dispatch: Dispatch;
}

const initialFilters: IFilters = {
  financialFilter: 'revenue',
  timeFilter: 'monthly',
};

const FilterContext = createContext<IFilterContext | undefined>(undefined);

function filterReducer(state: IFilters, action: Action) {
  switch (action.type) {
    case 'changeFinancialFilter': {
      if (state.financialFilter === 'margin') {
        return { ...state, financialFilter: 'revenue' } as IFilters;
      }
      return { ...state, financialFilter: 'margin' } as IFilters;
    }
    case 'changeTimeFilter': {
      if (state.timeFilter === 'monthly') {
        return { ...state, timeFilter: 'weekly' } as IFilters;
      }
      return { ...state, timeFilter: 'monthly' } as IFilters;
    }
  }
}

// nice example by KCD https://kentcdodds.com/blog/how-to-use-react-context-effectively#typescript
function FilterProvider({ children }: FilterProviderProps) {
  const [state, dispatch] = useReducer(filterReducer, initialFilters);

  const value = { state, dispatch };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}

function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
}

export { FilterProvider, useFilter };
