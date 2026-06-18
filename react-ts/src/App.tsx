import { useState, useEffect,  useRef} from 'react';

import CompanyCard from './components/CompanyCard';
import type { Company } from './types/Company';



function App() {
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const hasFetched = useRef(false);


  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchCompany = async () => {
      try {
        const response = await fetch(
          'https://fakerapi.it/api/v2/companies?_quantity=1'
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        
        const data: Company[] = json.data;
        if (!data || data.length === 0) {
          throw new Error('No company data returned from API');
        }

        setCompany(data[0]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, []);

  

  if (loading) {
    return ( 

      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f8fafc',
        }}
      >
        Loading...
      </div>

    );
  }

  if (error) {
    return (

      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f8fafc',
          color: '#dc2626',
        }}
      >
        Error: {error}
      </div>

    );
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f8fafc',
        padding: '24px',
      }}
    >
      {company && <CompanyCard company={company} />}
    </div>
  );
}

export default App;