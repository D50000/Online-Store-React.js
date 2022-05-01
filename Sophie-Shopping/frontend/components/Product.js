import Link from 'next/link';
import PropTypes from 'prop-types';

import formatMoney from '../lib/formatMoney';

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
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      {/* TODO: Add btns to edit/delete */}
      <div className="buttonList">
        <Link
          // next.js routing syntax
          href={{
            pathname: 'update',
            query: {
              id: product.id,
            },
          }}
        >
          Edit !
        </Link>
      </div>
    </ItemStyles>
  );
}

Product.propTypes = {
  product: PropTypes.any,
};
