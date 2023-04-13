import styles from './styles.module.scss';

export function SignInButton() {
    return (
        <button
            type='button'
            className={styles.signInButton}
        >
            <img className={styles.account} src='/assets/img/account.svg' alt='Account' />
        </button>
    )
}