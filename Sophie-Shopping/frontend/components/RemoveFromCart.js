import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: var(--red);
    cursor: pointer;
  }
`;

const REMOVE_FROM_CART_MUTATION = gql`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

function update(cache, payload) {
  // Use Apollo api to clear the cache. No need to request again by 'refetchQueries'.
  // Find: cache.identify()
  // Clear: cache.evit()
  cache.evict(cache.identify(payload.data.deleteCartItem));
}

export default function RemoveFromCart({ id }) {
  const [removeFromCart, { loading }] = useMutation(REMOVE_FROM_CART_MUTATION, {
    variables: { id },
    update: update,
  });
  return (
    <BigButton
      onClick={removeFromCart}
      disabled={loading}
      type="button"
      title="Remove This Item from Cart"
    >
      &times;
    </BigButton>
  );
}

RemoveFromCart.propTypes = {
  id: PropTypes.string,
};
