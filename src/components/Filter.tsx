import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import RadioGroupButtons from './RadioGroup';

export type TFinancialFilter = 'revenue' | 'margin';
export type TTimeFilter = 'monthly' | 'weekly';

const financialFilters: TFinancialFilter[] = ['revenue', 'margin'];
const timeFilters: TTimeFilter[] = ['monthly', 'weekly'];

function Filter() {
  return (
    <div className="flex items-center py-2 px-4 shadow-md">
      <div className="flex w-full items-center justify-between">
        <AdjustmentsHorizontalIcon className="block h-6 w-6" />
        <span className="hidden text-2xl font-medium sm:block">Filters</span>
        <RadioGroupButtons options={financialFilters} />
        <RadioGroupButtons options={timeFilters} />
      </div>
    </div>
  );
}

export default Filter;
