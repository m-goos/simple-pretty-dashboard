interface ICategoryRevenue {
  category_name: string;
  total_revenue: number;
  total_margin: number;
}

export type TCategoriesRevenue = ICategoryRevenue[];

interface IProduct {
  id: number;
  category: string;
  name: string;
  sale_price: number;
  margin: number;
}

export type TProducts = IProduct[];

interface IRevenueMonth {
  month: string;
  start_date: string;
  end_date: string;
  invoices_count: number;
  total_margin: number;
  total_revenue: number;
}

export type TRevenuesMonthly = IRevenueMonth[];
