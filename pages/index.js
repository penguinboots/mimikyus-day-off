import { Inter, Play } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import { PrismaClient } from '@prisma/client'
import Nav from '@/components/home/Nav'
import CharInfo from '@/components/home/CharInfo'
import PlayWindow from '@/components/home/PlayWindow'

const inter = Inter({ subsets: ['latin'] })

export default function Home(user) {
  return (
    <div className="app-wrapper">
      <Nav />
      <CharInfo />
      <PlayWindow />
    </div>
  )
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const blogs = await prisma.blog.findMany()

  return {
    props: { blogs }
  }
}