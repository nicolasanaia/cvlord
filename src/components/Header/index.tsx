import { useRouter } from 'next/router';
import { ThemeButton } from '../ThemeButton';
import { HeaderProps } from './interface';
import { AccountDropdown } from '../AccountDropdown';

export function Header ({mode, handleChangeTheme}: HeaderProps) {
    const { asPath } = useRouter();

    return (
        <header className='flex flex-row items-center justify-between mx-4'>
            <img className='cursor-pointer' src='/assets/img/logo.png' alt='CVLord logo' />
            {asPath === '/auth' ? (
                <ThemeButton mode={mode} handleChangeTheme={handleChangeTheme} />
            ) : (
                <div className='flex items-center justify-end'>
                    <ThemeButton mode={mode} handleChangeTheme={handleChangeTheme} />
                    <AccountDropdown />
                </div>
            )}
        </header>
    )
}