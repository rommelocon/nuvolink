import ProductCard from '../components/ProductCard';
import styled from 'styled-components';

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
`;

const products = [
  { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/150', price: 20 },
  { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150', price: 30 },
  { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150', price: 40 },
];

const Products = () => {
  return (
    <ProductsContainer>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductsContainer>
  );
};

export default Products;