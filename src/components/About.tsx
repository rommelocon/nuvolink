import styled from 'styled-components';
import aboutImage from '../assets/smart5.png';

const AboutContainer = styled.section`
    padding: 4rem 2rem;
    background: #f9f9f9;
    text-align: center;
    width: 100vw;
    box-sizing: border-box;
`;

const AboutTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1.5rem;
`;

const AboutDescription = styled.p`
    font-size: 1.2rem;
    color: #555;
    max-width: 800px;
    margin: 0 auto 2rem;
    text-align: justify;
`;

const LearnMoreButton = styled.button`
    background: #007bff;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: #0056b3;
    }
`;

const AboutImage = styled.img`
    max-width: 100%;
    height: auto;
    margin: 2rem auto;
    display: block;
    border-radius: 10px;
`;

const AboutSection = () => {
    return (
        <AboutContainer>
            <AboutTitle>About Nuvolink HomeTechnologies</AboutTitle>
            <AboutDescription>
                <AboutImage src={aboutImage} alt="Nuvolink HomeTechnologies" />
                At Nuvolink HomeTechnologies, we are pioneers in the world of IoT (Internet of Things) devices, delivering affordable yet high-quality products that transform your everyday living into a glimpse of the future.
            </AboutDescription>
            <AboutDescription>
                With a commitment to innovation and accessibility, we empower homeowners to control and automate their spaces seamlessly through smart technology.
            </AboutDescription>
            <AboutDescription>
                Our expertise lies in crafting intuitive solutions that bridge the gap between modern homes and the future of living. We believe that smart living should be within everyone’s reach and we are here to make that vision a reality.
            </AboutDescription>
            <LearnMoreButton>Learn More</LearnMoreButton>
        </AboutContainer>
    );
};

export default AboutSection;