import { Card, CardMedia, CardMediaProps, Stack } from '@mui/material';
import styled from 'styled-components';

export const DescriptionContainer = styled(Stack)`

  @media (min-width: 500px) {
    justify-content: space-between;
    align-self: flex-end;
    margin-left: 20px;
    height: 70%;
  }
`;

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    flex-direction: row;
  }
`;

export const StyledCardMedia = styled(CardMedia)<CardMediaProps>`
  height: 300px;

  @media (min-width: 500px) {
    max-width: 40%;
    height: 360px;
  }
  @media (min-width: 1500px) {
    max-width: 50%;
    height: 420px;
  }
`;

export const OriginContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  color: #b0b0b0;
`;

export const Price = styled.p`
  margin: 0 0 20px;
  font-size: 24px;
  font-weight: 600;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
`;
