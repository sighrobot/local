import React from 'react';
import Head from 'next/head';

import '../public/style.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Local</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
