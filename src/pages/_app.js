import React from 'react';
import '@/styles/globals.css';

App.propTypes = {
  Component: React.Component,
  pageProps: Object,
};

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
