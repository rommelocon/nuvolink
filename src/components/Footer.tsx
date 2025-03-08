import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaBehance, FaGlobe } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background-color: #f8f8f8;
  border-top: 1px solid #e7e7e7;
`;

const FooterSection = styled.div`
  flex: 1;
  padding: 1rem;
`;

const FooterTitle = styled.h3`
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  display: block;
  margin-bottom: 0.5rem;
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterIcon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  svg {
    margin-right: 0.5rem;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f1f1f1;
  border-top: 1px solid #e7e7e7;
`;

const Footer = () => {
  return (
      <>
        <FooterContainer>
          <FooterSection>
            <FooterTitle>Navigation</FooterTitle>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">Service</FooterLink>
            <FooterLink href="#">Products</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
            <FooterLink href="#">Purpose</FooterLink>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Follow Us</FooterTitle>
            <FooterIcon><FaFacebookF /> Facebook</FooterIcon>
            <FooterIcon><FaTwitter /> Twitter</FooterIcon>
            <FooterIcon><FaInstagram /> Instagram</FooterIcon>
            <FooterIcon><FaBehance /> Behance</FooterIcon>
            <FooterIcon><FaGlobe /> Website</FooterIcon>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Contact</FooterTitle>
            <FooterIcon><MdEmail /> support@nuvolink.com</FooterIcon>
            <FooterIcon><MdPhone /> +1 (800) 123-4567</FooterIcon>
            <FooterIcon><MdLocationOn /> 57 Villa Lamok, Pasig, 1600 Kalakhang Maynila</FooterIcon>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Innovating Your Home, Connecting Your Future</FooterTitle>
            <img src="path/to/logo.png" alt="NuvoLink Logo" />
          </FooterSection>
        </FooterContainer>
        <FooterBottom>
          <div>Copyright ©2025 NuvoLink HomeTechnologies All rights reserved</div>
          <div>Privacy policy</div>
          <div>Site by Ardian</div>
        </FooterBottom>
      </>
  );
};

export default Footer;