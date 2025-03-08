import styled from 'styled-components';
import bgImage from '../assets/bg_image.png';

const HeroContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
    text-align: center;
    padding: 0 2rem;
`;

const HeroTitle = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    white-space: pre-wrap;
`;

const Hero = () => {
    return (
        <HeroContainer style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <HeroTitle style={{ alignSelf: 'flex-end', color: 'white' }}>
                Innovating Your Home,{'\n'}Connecting Your Future
            </HeroTitle>
            {/* <HeroSubtitle>
                Discover the latest in home technologies and smart solutions with NUVOLINK.
            </HeroSubtitle> */}
        </HeroContainer>
    );
};

export default Hero;