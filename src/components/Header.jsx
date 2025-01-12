import styles from './header.module.css';

import f1Logo from '../images/formula-1-logo-7.png';

console.log(f1Logo);


export function Header(){
    return (
        <header className={styles.header}>
            <img src={f1Logo} alt="logo-f1" />
            {/* <strong>Formula One</strong> */}
        </header>
    )
}