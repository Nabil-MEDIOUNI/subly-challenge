import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  padding: 28px 0;
  background: white;
  box-shadow: 0px 0px 4px rgb(200, 200, 200);
  z-index: 1;
`;

export const HeaderLogo = styled.img`
  padding-left: 100px;
  @media only screen and (max-width: 920px) {
    padding-left: 15px;
  }
`;

export const HeaderTypography = styled.p`
  font-size: 20px;
  padding-left: 16px;
`;
