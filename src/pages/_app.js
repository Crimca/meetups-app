import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
    </Layout>
  );
}

export default MyApp;
