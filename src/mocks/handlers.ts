// src/mocks/handlers.js
import { rest } from 'msw';
import { BASE_URL } from '../constants';
import { MOCK_CATEGORIES_REVENUES } from './data/mock-categories-revenues';
import { MOCK_CUSTOMERS_REVENUES } from './data/mock-customers-revenues';
import { MOCK_INVOICES } from './data/mock-invoices';
import { MOCK_KPIS } from './data/mock-kpis';
import { MOCK_REVENUES_MONTHLY } from './data/mock-revenues-monthly';
import { MOCK_REVENUES_WEEKLY } from './data/mock-revenues-weekly';

export const handlers = [
  rest.get(BASE_URL + '/invoices', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_INVOICES));
  }),
  rest.get(BASE_URL + '/kpis', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_KPIS));
  }),
  rest.get(BASE_URL + '/revenues/weekly', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_REVENUES_WEEKLY));
  }),
  rest.get(BASE_URL + '/revenues/monthly', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_REVENUES_MONTHLY));
  }),
  rest.get(BASE_URL + '/categories/revenues', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_CATEGORIES_REVENUES));
  }),
  rest.get(BASE_URL + '/customers/revenues', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_CUSTOMERS_REVENUES));
  }),
];
