import PropTypes from 'prop-types';

import SingleProductPage from '../../components/SingleProduct';

export default function SingleProduct({ query }) {
  return <SingleProductPage id={query.id} />;
}

SingleProduct.propTypes = {
  query: PropTypes.any,
};
