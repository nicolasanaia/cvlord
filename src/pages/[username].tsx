import { useRouter } from 'next/router';

import Head from 'next/head';
import CoverTable from '@/components/CoverTable';
import TabMenu from '@/components/TabMenu';
import { getSession } from 'next-auth/react';
import { NextPageContext } from 'next';

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
  

export default function User() {
    const router = useRouter();
    const { username } = router.query

    return (
        <>
            <Head>
                <title>{username + ' | CVLord'}</title>
            </Head>
            <main>
                <CoverTable />
                <TabMenu />
            </main>
        </>
    );
};