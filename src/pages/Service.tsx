import styled from 'styled-components';

const ServiceContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Service = () => {
  return (
    <ServiceContainer>
      <h1>Our Services</h1>
      <p>We offer a wide range of services to meet your needs.</p>
    </ServiceContainer>
  );
};

export default Service;