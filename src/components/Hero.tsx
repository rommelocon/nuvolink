import bgImage from '../assets/bg_image.png';

const Hero = () => {
    return (
        <section
            className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-gray-100 to-gray-300 text-center p-8 animate-fadeIn"
            style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <h1 className="text-6xl font-bold text-white mb-4 text-shadow-lg whitespace-pre-wrap animate-slideInFromLeft" style={{ alignSelf: 'flex-end' }}>
                Innovating Your Home,{'\n'}Connecting Your Future
            </h1>
            {/* <p className="text-lg text-gray-700">
                Discover the latest in home technologies and smart solutions with NUVOLINK.
            </p> */}
        </section>
    );
};

export default Hero;
