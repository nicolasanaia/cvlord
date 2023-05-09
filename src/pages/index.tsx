import Head from 'next/head';
import { Inter } from 'next/font/google';
import CoverTable from '@/components/CoverTable';
import TabMenu from '@/components/TabMenu';
import { getSession } from 'next-auth/react';
import { NextPageContext } from 'next';
import useCurrentUser from '@/hooks/useCurrentUser';

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <Head>
        <title>Home | CVLord</title>
      </Head>
      <main>
        <CoverTable />
        <TabMenu />
      </main>
    </>
  )
}
