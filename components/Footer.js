import styles from '../styles/Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {

    return (
        <header className={styles.container}>
            <div className={styles.topContainer}>
                <div className={styles.footerLogo}>
                    <Image src="/assets/shared/desktop/logo-light.png" alt="open menu icon" width="404" height="54" />
                </div>
                <nav className={styles.nav}>
                    <Link href="/about" ><a >OUR COMPANY</a></Link>
                    <Link href="/locations" ><a >LOCATIONS</a></Link>
                    <Link href="/contact" ><a >CONTACT</a></Link>
                </nav>
            </div>
            <div>

            </div>
        </header>
    )
}