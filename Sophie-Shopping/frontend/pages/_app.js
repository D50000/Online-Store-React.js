import { Router } from 'next/router';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // custom style instead

import '../components/styles/nprogress.css';
import Page from '../components/Page';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
