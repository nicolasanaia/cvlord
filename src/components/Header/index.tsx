import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.header}>
            <img src='/assets/img/logo.png' alt='CVLord logo' />
            <SignInButton />
        </header>
    )
}