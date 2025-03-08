import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  position: relative;
  bottom: 0;
  width: 100%;
  box-sizing: border-box; /* Ensure padding does not cause overflow */
`;

const Footer = () => {
  return (
    <>
      <GlobalStyle />
      <FooterContainer>
        <p>&copy; 2023 Ecommerce Site. All rights reserved.</p>
      </FooterContainer>
    </>
  );
};

export default Footer;