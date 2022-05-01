import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;

export default function UpdateProduct({ id }) {
    const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
        variables: {
            id: id
        }
      });
      console.log(data)

  return <p>update updatea {id}</p>;
}

UpdateProduct.propTypes = {
  id: PropTypes.string,
};
