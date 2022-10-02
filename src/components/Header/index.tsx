import { HeaderContainer, HeaderLogo, HeaderTypography } from './styles';

function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo
        src="https://uploads-ssl.webflow.com/61e81392cdf29f010bb62bdc/61f2c41f3c80f881445d79f7_Touch%20Icon-1.png"
        alt=""
      />
      <HeaderTypography>Subly Challenge</HeaderTypography>
    </HeaderContainer>
  );
}

export default Header;
