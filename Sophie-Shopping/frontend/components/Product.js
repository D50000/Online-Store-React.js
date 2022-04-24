import Link from 'next/link';
import PropTypes from 'prop-types';

import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';

export default function Product({ product }) {
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{product.price}</PriceTag>
    </ItemStyles>
  );
}

Product.propTypes = {
  product: PropTypes.any,
};
