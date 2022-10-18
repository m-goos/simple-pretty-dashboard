import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import {
  TFinancialFilter,
  TTimeFilter,
  useFilter,
} from '../context/filterContext';

import RadioGroupButtons from './RadioGroup';

const financialFilterOptions: TFinancialFilter[] = ['revenue', 'margin'];
const timeFilterOptions: TTimeFilter[] = ['monthly', 'weekly'];

function Filter() {
  const { dispatch } = useFilter();
  return (
    <div className="flex items-center rounded py-2 px-4 shadow-md md:mt-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <AdjustmentsHorizontalIcon className="block h-6 w-6" />
          <span className="hidden text-xl font-medium tracking-wide sm:block lg:text-2xl">
            Filters
          </span>
        </div>
        <div className="flex gap-2">
          <RadioGroupButtons
            options={financialFilterOptions}
            onChange={() => dispatch({ type: 'changeFinancialFilter' })}
            radioGroupLabel={'Financial filters'}
          />
          <RadioGroupButtons
            options={timeFilterOptions}
            onChange={() => dispatch({ type: 'changeTimeFilter' })}
            radioGroupLabel={'Time period filters'}
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
