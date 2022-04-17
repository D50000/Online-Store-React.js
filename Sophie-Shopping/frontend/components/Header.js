import Link from 'next/link';
import PropTypes from 'prop-types';

import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/">Sophie Shopping</Link>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </header>
  );
}

// Header.propTypes = {
//   children: PropTypes.any,
//   cool: PropTypes.string,
// };
