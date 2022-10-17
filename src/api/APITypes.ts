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

interface IRevenueWeek {
  week: string;
  start_date: string;
  end_date: string;
  invoices_count: number;
  total_margin: number;
  total_revenue: number;
}

export type TRevenuesWeekly = IRevenueWeek[];

export interface IInvoiceLine {
  product_id: number;
  product_name: string;
  product_category: string;
  unit_price: number;
  quantity: number;
  total_line: number;
  total_margin: number;
}

export interface IInvoice {
  id: number;
  customer_id: number;
  customer_name: string;
  date: string;
  invoice_lines: IInvoiceLine[];
  total_invoice: number;
  total_margin: number;
  region: string;
}

export type TInvoices = IInvoice[];

interface ICustomersRevenue {
  customer_id: number;
  customer_name: string;
  total_revenue: number;
  total_margin: number;
  invoices_count: number;
}

export type TCustomersRevenues = ICustomersRevenue[];

interface IKPI {
  label: string;
  value: number;
}

export type TKPIs = IKPI[];
