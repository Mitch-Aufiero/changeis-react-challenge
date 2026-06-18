import { useState, useEffect,  useRef} from 'react';
import styled from 'styled-components';

import CompanyCard from './components/CompanyCard';
import type { Company } from './types/Company';



const Page = styled.div`
  min-height: 100vh;
  background: #989fa7;
  padding: 40px 24px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;
const StatusMessage = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fafc;
  font-family: system-ui, sans-serif;
  color: ${(props) => (props.$isError ? '#dc2626' : '#334155')};
`;



function App() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const hasFetched = useRef(false);


  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchCompanies = async () => {
      try {
        const response = await fetch(
          'https://fakerapi.it/api/v2/companies?_quantity=12'
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        
        const data: Company[] = json.data;
        if (!data || data.length === 0) {
          throw new Error('No company data returned from API');
        }

        setCompanies(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  

  if (loading) {
    return ( 

      <StatusMessage>
        Loading...
      </StatusMessage>

    );
  }

  if (error) {
    return (

      <StatusMessage $isError>
        Error: {error}
      </StatusMessage>

    );
  }

  return (
     <Page>
      <Grid>
        {companies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </Grid>
    </Page>

  );
}

export default App;