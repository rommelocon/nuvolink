import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  width: 200px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

interface Product {
  image: string;
  name: string;
  price: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card>
      <ProductImage src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </Card>
  );
};

export default ProductCard;