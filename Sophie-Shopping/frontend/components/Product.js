import PropTypes from 'prop-types';

export default function Product({ product }) {
  return <p key={product.id}>{product.name}</p>;
}

Product.propTypes = {
  product: PropTypes.any,
};
