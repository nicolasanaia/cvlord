import axios from 'axios';
import { signIn, getSession } from 'next-auth/react';

import Input from "@/components/Input";
import { useCallback, useState } from "react";
import { useRouter } from 'next/router';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { NextPageContext } from 'next';

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);
  
    if (session) {
      return {
        redirect: {
          destination: '/',
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
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [hasAccount, setHasAccount] = useState('login');

    const toggleHasAccount = useCallback(() => {
        setHasAccount((currentScreen) => currentScreen === 'login' ? 'register' : 'login')
    }, []);

    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                redirect: false,
                callbackUrl: '/'
            });

            router.push('/')
        } catch (error) {
            console.log(error);
        }
    }, [email, password, router]);

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            });

            login();
        } catch (error) {
            console.log(error);
        }
    }, [email, name, password]);

    return (
        <div className='flex justify-center h-auto'>
            <title>{hasAccount === 'login' ? 'Log In' : 'Sign Up'} | CVLord</title>
            <div className='bg-backgroundSecondary rounded-lg px-16 py-16 my-20 lg:2-2/5 lg:max-w-md rounded-md w-[90%]'>
                <h2 className='text-highlightPrimary font-hanken font-extralight text-4xl mb-8'>
                    {hasAccount === 'login' ? 'Log In' : 'Sign Up'}
                </h2>
                <div className='flex flex-col font-hanken gap-4'>
                    {hasAccount === 'register' && (
                        <Input
                        label='Name'
                        onChange={(event: any) => setName(event.target.value)}
                        id='name'
                        value={name}
                    />
                    )}
                    
                    <Input
                        label='Email'
                        onChange={(event: any) => setEmail(event.target.value)}
                        id='email'
                        type='email'
                        value={email}
                    />
                    <Input
                        label='Password'
                        onChange={(event: any) => setPassword(event.target.value)}
                        id='password'
                        type='password'
                        value={password}
                    />
                </div>
                <button onClick={hasAccount === 'login' ? login : register} className='bg-highlightPrimary py-3 text-fontPrimary font-hanken font-medium text-lg rounded-lg w-full mt-10 brightness-90 hover:brightness-100 hover:shadow-inner hover:shadow-highlightPrimary transition duration-200'>
                    {hasAccount === 'login' ? 'Log in' : 'Sign up'}
                </button>
                <div className='flex flex-row items-center gap-4 mt-8 justify-center'>
                    <div
                        onClick={() => signIn('google', { callbackUrl: '/' })}
                        className='
                            w-8
                            h-8
                            bg-transparent
                            rounded-full
                            flex
                            items-center
                            justify-center
                            cursor-pointer
                            hover:opacity-80
                            transition
                            duration-200
                        '
                    >
                        <FcGoogle size={30} />
                    </div>
                    <div
                        onClick={() => signIn('github', { callbackUrl: '/' })}
                        className='
                            w-8
                            h-8
                            bg-transparent
                            rounded-full
                            flex
                            items-center
                            justify-center
                            cursor-pointer
                            hover:opacity-80
                            transition
                            duration-200
                        '
                    >
                        <FaGithub size={30} />
                    </div>
                    <div
                        onClick={() => signIn('linkedin', { callbackUrl: '/' })}
                        className='
                            w-8
                            h-8
                            bg-transparent
                            rounded-full
                            flex
                            items-center
                            justify-center
                            cursor-pointer
                            hover:opacity-80
                            transition
                            duration-200
                        '
                    >
                        <FaLinkedinIn size={30} />
                    </div>
                </div>
                <p className='text-fontPrimary font-hanken mt-12'>
                    {hasAccount === 'login' ? 'First time using CVLord? ' : 'Already have an account? '}
                    <span onClick={toggleHasAccount} className='text-highlightPrimary font-hanken hover:underline cursor-pointer'>
                        {hasAccount === 'login' ? 'Create an account' : 'Log in here'}
                    </span>
                </p>
            </div>
        </div>
    );
};