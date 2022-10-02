import styled from 'styled-components';

export const CardsListContainer = styled.div`
  position: absolute;
  top: 53%;
  transform: translate(0%, -50%);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: auto;
  width: 100%;
  padding-left: 100px;
  @media only screen and (max-width: 980px) {
    justify-content: center;
    padding-left: 0;
  }
  @media only screen and (max-width: 680px) {
    padding-bottom: 2rem;
    margin-top: 24rem;
  }
`;
