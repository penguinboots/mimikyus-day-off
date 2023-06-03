import { Inter, Play } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
//import { PrismaClient } from '@prisma/client';
import Nav from '@/components/home/Nav';
import CharInfo from '@/components/home/CharInfo';
import PlayWindow from '@/components/home/PlayWindow';
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }
  return (
    <a href="/api/auth/login">Login</a>
  );
}

// export async function getStaticProps() {
//   const prisma = new PrismaClient();

//   return {
//     props : {}
//   };
// }