import styled from 'styled-components';

const PurposeContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Purpose = () => {
  return (
    <PurposeContainer>
      <h1>Our Purpose</h1>
      <p>We aim to provide the best products and services to our customers.</p>
    </PurposeContainer>
  );
};

export default Purpose;