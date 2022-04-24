import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

import Product from './Product';

const All_PRODUCTS_QUERY = gql`
  query All_PRODUCTS_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Products() {
  const { data, error, loading } = useQuery(All_PRODUCTS_QUERY);
  console.log(data);
  if (loading) {
    return <p>LOADING ...</p>;
  }
  if (error) {
    return <p>ERROR ... {error.message}</p>;
  }
  return (
    <div>
      <ProductsList>
        {data.allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsList>
    </div>
  );
}
