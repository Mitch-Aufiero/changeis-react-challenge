import type { Company } from '../types/CompanyInterfaces';

const BASE_URL = 'https://fakerapi.it/api/v2/companies';

export async function fetchCompanies(quantity: number): Promise<Company[]> {
  const response = await fetch(`${BASE_URL}?_quantity=${quantity}`);

  if (!response.ok) {

    throw new Error(`Failed to fetch companies. Status: ${response.status}`);
  }

  const json = await response.json();
  console.log(json)

  if (!json || !Array.isArray(json.data)) {
    throw new Error('Invalid API response format: expected data array');
  }

  if (json.data.length === 0) {
    throw new Error('No companies returned from API');
  }

  const first = json.data[0];

  
  if (
    typeof first?.id !== 'number' ||
    typeof first?.name !== 'string' ||
    typeof first?.email !== 'string'
  ) {
    throw new Error('invalid company data structure received from API ');
  }

  return json.data as Company[];
}
