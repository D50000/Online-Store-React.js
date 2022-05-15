import PropTypes from 'prop-types';

import { useUser } from './User';
import SignIn from './SignIn';

export default function PleaseSignIn({ children }) {
  const me = useUser();
  // Directly return the SignIn component. Or the SellPage component.
  if (!me) return <SignIn />;
  return children;
}

PleaseSignIn.propTypes = {
  children: PropTypes.any,
};
