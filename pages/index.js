import { Inter, Play } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import { PrismaClient } from '@prisma/client';
import Nav from '@/components/home/Nav';
import CharInfo from '@/components/home/CharInfo';
import PlayWindow from '@/components/home/PlayWindow';

const inter = Inter({ subsets: ['latin'] });

export default function Home(user) {
  return (
    <></>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();

  return {
    props : { blogs }
  };
}