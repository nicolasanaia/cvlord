import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from './home.module.css'
import { UserInfo } from '@/components/UserInfo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | CVLord</title>
      </Head>
      <main>
        <UserInfo />
      </main>
    </>
  )
}
