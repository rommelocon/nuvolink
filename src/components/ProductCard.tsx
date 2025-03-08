import React from 'react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-72 text-left flex flex-col">
      <img className="w-full rounded-t-lg mb-4" src={product.image} alt={product.name} />
      <h2 className="text-xl font-bold text-gray-800 mb-4">{product.name}</h2>
      <p className="text-gray-600 flex-grow">{product.description}</p>
    </div>
  );
};

export default ProductCard;
