import missionImage from "../assets/mission.png";
import visionImage from "../assets/vision.png";

const Purpose = () => {
  return (
    <section className="h-screen p-8 bg-gray-100 flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Purpose</h1>
      <div className="grid grid-cols-2 gap-12 max-w-5xl items-center">
        <div className="flex flex-col items-center">
          <img
            src={missionImage}
            alt="Mission"
            className="w-full h-72 object-cover rounded-lg mb-4"
          />
          <div className="text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600">
              To deliver the best of future innovations into your home,
              transforming standard living spaces into intelligent, connected
              environments accessible to everyone.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-left mb-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-600">
              To become a household name globally, revolutionizing the way people
              interact with their homes and pushing the boundaries of smart home
              technology.
            </p>
          </div>
          <img
            src={visionImage}
            alt="Vision"
            className="w-full h-72 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Purpose;
