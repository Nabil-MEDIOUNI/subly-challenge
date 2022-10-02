import styled from 'styled-components';

export const CardsListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: auto;
  width: 100%;
  padding-left: 100px;
  margin-top: 1rem;
  @media only screen and (max-width: 980px) {
    justify-content: center;
    padding-left: 0;
  }
  @media only screen and (max-width: 680px) {
    padding-bottom: 2rem;
    width: 100%;
  }
`;
