import React from 'react';
import '../styles/globals.scss';
import '../styles/App.scss';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { GameStateProvider } from '@/utils/context/GameStateContext';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <GameStateProvider>
        <Component {...pageProps} />
      </GameStateProvider>
    </UserProvider>
  );
}