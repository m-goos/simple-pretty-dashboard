// this could be an object and then a type derived from that,
//  but this is much simpler
export type TEndpoint =
  | '/products'
  | '/customers'
  | '/invoices'
  | '/revenues/monthly'
  | '/revenues/weekly'
  | '/customers/revenues'
  | '/categories/revenues';

export const BASE_URL = process.env.REACT_APP_BASE_URL as string;

export const WEEK_NUMBERS = [];

/** defaults for react-chartjs components  */
export const CHART_OPTIONS = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: '',
    },
  },
};
