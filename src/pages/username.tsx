import axios from 'axios';
import { getSession } from 'next-auth/react';

import Input from "@/components/Input";
import { useCallback, useState } from "react";
import { useRouter } from 'next/router';

import { NextPageContext } from 'next';
import Head from 'next/head';

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

export default function Auth() {
    const router = useRouter();
    const [username, setUsername] = useState('');


    const handleSubmit = (event: any): void => {
        if (event.key === 'Enter') {
            addUsername();
        }
    }

    const addUsername = useCallback(async () => {
        try {
            await axios.put('/api/username', {
                username: username,
            });

            router.push('/');
        } catch (error) {
            console.log(error);
        }
    }, [username, router]);

    return (
        <>
            <Head>
                <title>{'Set Username | CVLord'}</title>
            </Head>
            <div className='flex justify-center h-auto'>
                <div className='bg-backgroundSecondary rounded-lg px-16 py-16 my-20 lg:2-2/5 lg:max-w-md rounded-md w-[90%]'>
                    <h2 className='text-highlightPrimary font-hanken font-extralight text-4xl mb-8'>
                        Create Username
                    </h2>
                    <div className='flex flex-col font-hanken gap-4'>
                        <Input
                            label='Username'
                            onChange={(event: any) => setUsername(event.target.value)}
                            id='username'
                            value={username}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                    <button 
                        type='submit' 
                        onClick={addUsername} 
                        className='bg-highlightPrimary py-3 text-fontPrimary font-hanken font-medium text-lg rounded-lg w-full mt-10 brightness-90 hover:brightness-100 hover:shadow-inner hover:shadow-highlightPrimary transition duration-200'
                    >
                        Add Username
                    </button>
                </div>
            </div>
        </>
    );
};