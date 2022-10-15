import { TEndpoint } from './types';

const BASE_URL = process.env.REACT_APP_BASE_URL as string;

export async function client(endpoint: TEndpoint) {
  const result = await fetch(BASE_URL + endpoint).then((res) => res.json());
  return result;
}

export default client;
