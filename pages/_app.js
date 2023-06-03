import React from 'react';
import '../styles/globals.scss';
import '../styles/Home.scss';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function App({ Component, pageProps }) {
  return (<UserProvider>
    <Component {...pageProps} />;
  </UserProvider>);
}