import {
  ArrowTrendingUpIcon,
  CircleStackIcon,
  CurrencyEuroIcon,
  DocumentTextIcon,
  TagIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import useKPIs from '../api/hooks/useKPIs';
import { formatCurrency } from '../utils/formatCurrency';
import ErrorPage from './ErrorPage';
import Loading from './Loading';

const KPIMap = {
  'Costumers count': {
    label: 'Customers',
    icon: <UsersIcon />,
  },
  'Invoices count': {
    label: 'Invoices',
    icon: <DocumentTextIcon />,
  },
  'Categories count': {
    label: 'Categories',
    icon: <TagIcon />,
  },
  'Products count': {
    label: 'Products',
    icon: <CircleStackIcon />,
  },
  'Total margin': {
    label: 'Total margin',
    icon: <CurrencyEuroIcon />,
  },
  'Total revenues': {
    label: 'Total revenues',
    icon: <ArrowTrendingUpIcon />,
  },
};

type TLabel = keyof typeof KPIMap;
interface CardProps {
  value: number;
  label: TLabel;
}

const Card = ({ value, label }: CardProps) => (
  // number formatting:
  // 1. modulo returns the remainder of the division by 1, thus checking for decimals.
  <div className="flex flex-col items-center rounded border py-4 shadow-md  hover:bg-gray-100">
    <div className="flex items-center">
      {/* don't render labels for revenue and margin for now */}
      {label !== 'Total margin' && label !== 'Total revenues' ? (
        <span className="h-5 w-5">{KPIMap[label].icon}</span>
      ) : null}
      <span className="px-2 text-2xl font-semibold text-sky-900">
        {value % 1 !== 0 ? formatCurrency(value, true) : value}
      </span>
    </div>
    <span className="text-sm text-gray-500">{KPIMap[label].label}</span>
  </div>
);

function StatisticCard() {
  const { status, error, data } = useKPIs();

  if (status === 'loading') return <Loading />;
  if (status === 'error') return <ErrorPage error={error as Error} />;

  return (
    <div className="grid grid-flow-row grid-cols-3 gap-3 xl:grid-cols-6">
      {data.map((kpi) => (
        <Card value={kpi.value} label={kpi.label as TLabel} />
      ))}
    </div>
  );
}

export default StatisticCard;
