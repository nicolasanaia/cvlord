// import styles from './styles.module.css';

import { AccountDropdown } from "../AccountDropdown";

export function AccountButton() {
    return (
        <div
            className='flex items-center justify-center bg-transparent cursor-pointer'
        >
            <AccountDropdown />
        </div>
    )
}