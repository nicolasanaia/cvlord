import { AccountButton } from '../AccountButton';
import { ThemeButton } from '../ThemeButton';
import { HeaderProps } from './interface';

export function Header ({mode, handleChangeTheme}: HeaderProps) {
    return (
        <header className='flex items-center justify-between mx-3'>
            <img className='cursor-pointer' src='/assets/img/logo.png' alt='CVLord logo' />
            <div className='flex justify-end'>
                <ThemeButton mode={mode} handleChangeTheme={handleChangeTheme} />
                <AccountButton />
            </div>
        </header>
    )
}