import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Product from './Product';
import { perPage } from '../config';

export const All_PRODUCTS_QUERY = gql`
  query All_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allProducts(skip: $skip, first: $first) {
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

export default function Products({ page }) {
  const { data, error, loading } = useQuery(All_PRODUCTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });
  console.log(data, error, loading);
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

Products.propTypes = {
  page: PropTypes.number,
};
