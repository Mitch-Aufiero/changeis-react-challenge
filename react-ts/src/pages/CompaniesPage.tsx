import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import CompanyCard from '../components/CompanyCard';
import { fetchCompanies } from '../services/companyService';
import type { Company } from '../types/CompanyInterfaces';

const Container = styled.div`
  min-height: 100vh;
  background: #f8fafc;
`;

const Header = styled.header`
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  padding: 20px 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;


const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    sans-serif;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;


const Content = styled.main`
  padding: 40px 24px;
  max-width: 1200px;
  margin: 0 auto;
`;


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;


const StatusMessage = styled.div<{ $isError?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    sans-serif;
  color: ${({ $isError }) => ($isError ? '#dc2626' : '#334155')};
  font-size: 1.1rem;
`;


function CompaniesPage() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const load = async () => {
      try {
        const data = await fetchCompanies(12);
        setCompanies(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Faker API Companies</Title>
      </Header>
      <Content>
        {loading && <StatusMessage>Loading...</StatusMessage>}
        {error && <StatusMessage $isError>Error: {error}</StatusMessage>}
        {!loading && !error && (
          <Grid>
            {companies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </Grid>
        )}
      </Content>
    </Container>
  );
}

export default CompaniesPage;
