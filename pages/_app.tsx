/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { ReactNode } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon-32x32.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A URL shortener" />
        <title>Shortly</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
