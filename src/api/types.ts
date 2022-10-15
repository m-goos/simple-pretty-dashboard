export interface ICategoryRevenue {
  category_name: string;
  total_revenue: number;
  total_margin: number;
}

export type ICategoriesRevenue = ICategoryRevenue[];

interface IProduct {
  id: number;
  category: string;
  name: string;
  sale_price: number;
  margin: number;
}

export type IProducts = IProduct[];

export type TEndpoint =
  | '/products'
  | '/customers'
  | '/invoices'
  | '/revenues/monthly'
  | '/revenues/weekly'
  | 'customers/revenues'
  | 'categories/revenues';
