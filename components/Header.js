import styles from '../styles/Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {

    return (
        <header className={styles.container}>
        <div className={styles.headerLogo}>
            <Image src="/assets/shared/desktop/logo-dark.png" alt="open menu icon" width="404" height="54" />
        </div>
        <nav className={styles.nav}>
            <Link href="/about" ><a >OUR COMPANY</a></Link>
            <Link href="/locations" ><a >LOCATIONS</a></Link>
            <Link href="/contact" ><a >CONTACT</a></Link>
        </nav>
        <nav className={styles.mobileNav}>
            <Link href="/about" ><a >OUR COMPANY</a></Link>
            <Link href="/locations" ><a >LOCATIONS</a></Link>
            <Link href="/contact" ><a >CONTACT</a></Link>
        </nav>
        <div className={styles.mobileContainer}>
            <Image src="/assets/shared/mobile/icon-hamburger.svg" alt="open menu icon" width="24" height="20" />
            <Image src="/assets/shared/mobile/icon-close.svg" alt="close menu icon" width="20" height="20" /> 
        </div>
        </header>
    )
}