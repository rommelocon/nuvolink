import ProductCard from '../components/ProductCard';
import productImage1 from '../assets/product1.png';
import productImage2 from '../assets/product2.png';
import productImage3 from '../assets/product3.png';
import productImage4 from '../assets/product4.png';

const products = [
  {
    id: 1,
    name: 'Wi-Fi Smart Switches',
    description: 'Turn your appliances on and off remotely with our Wi-Fi Smart Switches. Enjoy energy savings and complete control at your fingertips.',
    image: productImage1,
  },
  {
    id: 2,
    name: 'Wi-Fi Smart Thermostat',
    description: 'Experience the perfect temperature every time. Our Wi-Fi Smart Thermostat allows you to optimize your home’s climate, saving energy while maintaining comfort.',
    image: productImage2,
  },
  {
    id: 3,
    name: 'Wi-Fi Smart Bulb',
    description: 'Light up your home with customizable smart bulbs. Adjust brightness, change colors, and set schedules – all from your mobile device.',
    image: productImage3,
  },
  {
    id: 4,
    name: 'Wi-Fi Curtain Opener',
    description: 'Open and close your curtains with ease using our Wi-Fi Curtain Opener. Schedule operations or control them in real time to suit your lifestyle.',
    image: productImage4,
  },
];

const Products = () => {
  return (
    <section className="h-screen p-4 bg-gray-100 flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Products</h1>
      <p className="text-base text-gray-600 max-w-2xl mb-6">
        Elevate your home with our cutting-edge IoT devices, designed to offer <strong>convenience, efficiency</strong>, and <strong>modern comfort</strong>. Control your home effortlessly through your smartphone, no matter where you are.
      </p>
      <div className="flex flex-wrap gap-4 justify-center items-stretch">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
