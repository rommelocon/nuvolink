import Accordion from '../components/Accordion';

const Service = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Service</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Why Choose Nuvolink HomeTechnologies?</h2>
      <Accordion />
    </section>
  );
};

export default Service;