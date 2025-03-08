import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us for any inquiries.</p>
    </ContactContainer>
  );
};

export default Contact;