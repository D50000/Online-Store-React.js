import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import Head from 'next/head';
import styled from 'styled-components';

import DisplayError from './ErrorMessage';

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  maxwidth: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleProductPage({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading .......</p>;
  if (error) return <DisplayError error={error} />;

  const { Product } = data;
  return (
    <ProductStyles>
      <Head>
        <title>Sophie Shopping | {Product.name}</title>
      </Head>
      <img
        src={Product.photo.image?.publicUrlTransformed}
        alt={Product.photo.altText}
      />
      <div className="details">
        <h2>{Product.name}</h2>
        <p>{Product.description}</p>
      </div>
    </ProductStyles>
  );
}

SingleProductPage.propTypes = {
  id: PropTypes.any,
};
