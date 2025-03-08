import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Nav = styled.nav`
  display: flex;
  gap: 2rem; /* Increase gap between nav items */
  max-width: 100%;
  overflow-x: auto;
  padding: 0 3rem; /* Add padding to squeeze content */
`;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.1); /* Semi-transparent background */
  padding: 1rem 3rem; /* Increase padding to squeeze content */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(1px); /* Blur effect */
`;

const NavLink = styled(ScrollLink)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem; /* Slightly increase font size */
  font-weight: 500;
  padding: 0.75rem 0; /* Add padding to align vertically */
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
  &.active {
    border-bottom: 2px solid white;
    color: white;
  }
`;

const ContactNavLink = styled(NavLink)`
  background-color: white;
  color: #333;
  border-radius: 5px;
  padding: 0.75rem 1.5rem; /* Increase padding */
  margin: auto 0; /* Center vertically */
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/nuvolink">
        <img src={logo} alt="NUVOLINK Logo" style={{ height: '70px' }} />
      </Link>
      <Nav>
        <NavLink to="home" smooth={true} duration={500} spy={true}>Home</NavLink>
        <NavLink to="products" smooth={true} duration={500} spy={true}>Products</NavLink>
        <NavLink to="purpose" smooth={true} duration={500} spy={true}>Purpose</NavLink>
        <NavLink to="service" smooth={true} duration={500} spy={true}>Service</NavLink>
        <ContactNavLink to="contact" smooth={true} duration={500} spy={true}>Contact</ContactNavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;