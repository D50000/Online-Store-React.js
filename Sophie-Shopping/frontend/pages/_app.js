import PropTypes from 'prop-types';

import Page from '../components/Page';

// Higher priority than _app.js > index.js
export default function MyApp({ Component }) {
  return (
    <Page>
      <Component />
    </Page>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
};
