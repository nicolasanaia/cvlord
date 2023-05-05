import Input from "@/components/Input";
import { useCallback, useState } from "react";

export default function Auth() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [hasAccount, setHasAccount] = useState('login');

    const toggleHasAccount = useCallback(() => {
        setHasAccount((currentScreen) => currentScreen === 'login' ? 'register' : 'login')
    }, []);

    return (
        <div className='flex justify-center h-auto'>
            <div className='bg-backgroundSecondary rounded-lg px-16 py-16 my-20 lg:2-2/5 lg:max-w-md rounded-md w-[90%]'>
                <h2 className='text-highlightPrimary font-hanken font-extralight text-4xl mb-8'>
                    {hasAccount === 'login' ? 'Log In' : 'Sign Up'}
                </h2>
                <div className='flex flex-col gap-4'>
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
                <button className='bg-highlightPrimary py-3 text-fontPrimary rounded-lg w-full mt-10 brightness-90 hover:brightness-100 hover:shadow-inner hover:shadow-highlightPrimary transition duration-200'>
                    {hasAccount === 'login' ? 'Log in' : 'Sign up'}
                </button>
                <p className='text-fontPrimary mt-12'>
                    {hasAccount === 'login' ? 'First time using CVLord? ' : 'Already have an account? '}
                    <span onClick={toggleHasAccount} className='text-highlightPrimary ml-1 hover:underline cursor-pointer'>
                        {hasAccount === 'login' ? 'Create an account' : 'Log in here'}
                    </span>
                </p>
            </div>
        </div>
    );
};