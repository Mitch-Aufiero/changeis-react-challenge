import React from "react";
import styled from "styled-components";

import type { Company } from "../interfaces/CompanyInterfaces";

interface CompanyCardProps{
    
    company: Company;

}

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    sans-serif;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;


const CompanyName = styled.h2`
  margin: 0 0 16px 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
`;


const DetailRow = styled.div`
  margin-bottom: 10px;
  font-size: 0.95rem;
  color: #334155;
`;


const Label = styled.span`
  font-weight: 500;
  color: #64748b;
  margin-right: 6px;
`;

const Link = styled.a`
  color: #2563eb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;


const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <Card>
      <CompanyName>{company.name}</CompanyName>

      <DetailRow>
        <Label>Email:</Label>
        <Link href={`mailto:${company.email}`}>{company.email}</Link>
      </DetailRow>

      <DetailRow>
        <Label>Phone:</Label>
        <span>{company.phone}</span>
      </DetailRow>

      <DetailRow>
        <Label>Website:</Label>
        <Link href={company.website} target="_blank" rel="noopener noreferrer">
          {company.website}
        </Link>
      </DetailRow>
    </Card>
  );
};

export default CompanyCard;