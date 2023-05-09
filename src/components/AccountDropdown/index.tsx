import useCurrentUser from '@/hooks/useCurrentUser';
import { Menu, Transition } from '@headlessui/react'
import { signOut } from 'next-auth/react'
import { Fragment } from 'react'

export function AccountDropdown() {
    const { data } = useCurrentUser();

    return (
        <div className='flex justify-center bg-transparent cursor-pointer'>
            <Menu as='div' className='relative inline-block text-left'>
                <div>
                    <Menu.Button>
                        {data ? (
                            <img 
                                src={data.image} 
                                width={45}
                                height={45}
                                className='rounded-full'
                            />
                        ) : (
                            <svg 
                                className='stroke-fontPrimary h-9 w-9 transition duration-150 ease-in-out hover:stroke-highlightPrimary' 
                                xmlns='http://www.w3.org/2000/svg' 
                                fill='none' 
                                viewBox='0 0 24 24' 
                                strokeWidth={1}
                            >
                                <path 
                                    strokeLinecap='round' 
                                    strokeLinejoin='round' 
                                    d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z' 
                                />
                            </svg>
                        )}
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                >
                    <Menu.Items className='absolute right-0 mt-2 w-48 origin-top-right divide-y divide-fontPrimary rounded bg-highlightPrimary shadow-lg focus:outline-none'>
                        <div className='px-px py-px'>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => signOut()}
                                        className={`${
                                        active ? 'bg-backgroundPrimary text-highlightPrimary' : 'bg-backgroundPrimary text-fontPrimary'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                        <LogoutActiveIcon
                                            className='mr-2 h-5 w-5'
                                            aria-hidden='true'
                                        />
                                        ) : (
                                        <LogoutInactiveIcon
                                            className='mr-2 h-5 w-5'
                                            aria-hidden='true'
                                        />
                                        )}
                                            Log out
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

function LogoutInactiveIcon(props: any) {
    return (
        <svg 
            {...props}
            xmlns='http://www.w3.org/2000/svg' 
            viewBox='0 0 24 24' 
            strokeWidth={1.5} 
            className='stroke-fontPrimary h-6 w-6 mr-2'
            fill='none'
        >
            <path 
                strokeLinecap='round' 
                strokeLinejoin='round'
                d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9' 
            />
        </svg>
    )
  }
  
  function LogoutActiveIcon(props: any) {
    return (
        <svg 
            {...props}
            xmlns='http://www.w3.org/2000/svg' 
            viewBox='0 0 24 24' 
            strokeWidth={1.5} 
            className='stroke-highlightPrimary h-6 w-6 mr-2'
            fill='none' 
        >
            <path 
                strokeLinecap='round' 
                strokeLinejoin='round'
                d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9' 
            />
        </svg>
    )
  }  