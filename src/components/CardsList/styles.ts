import styled from 'styled-components';

export const CardsListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: auto;
  width: 100%;
  margin-top: 1rem;
  @media only screen and (max-width: 680px) {
    padding-bottom: 2rem;
  }
`;
