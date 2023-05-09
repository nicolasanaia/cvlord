import { useRouter } from 'next/router';
import { AccountButton } from '../AccountButton';
import { ThemeButton } from '../ThemeButton';
import { HeaderProps } from './interface';

export function Header ({mode, handleChangeTheme}: HeaderProps) {
    const { asPath } = useRouter();

    return (
        <header className='flex flex-row items-center justify-between mx-4'>
            <img className='cursor-pointer' src='/assets/img/logo.png' alt='CVLord logo' />
            <div className='flex justify-end'>
                {asPath === '/auth' ? (
                    <ThemeButton mode={mode} handleChangeTheme={handleChangeTheme} />
                ) : (
                    <>
                        <ThemeButton mode={mode} handleChangeTheme={handleChangeTheme} />
                        <AccountButton />
                    </>
                )}
            </div>
        </header>
    )
}