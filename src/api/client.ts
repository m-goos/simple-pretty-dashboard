import { BASE_URL, TEndpoint } from '../constants';

export async function client(endpoint: TEndpoint) {
  const result = await fetch(BASE_URL + endpoint).then((res) => res.json());
  return result;
}

export default client;
