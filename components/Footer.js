import styles from '../styles/Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {

    return (
        <footer className={styles.container}>
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
            <div className={styles.bottomContainer}>
                <div className={styles.leftFlexContainer}>
                    <ul className={styles.address}>
                        <li>Designo Central Office</li>
                        <li>3886 Wellington Street</li>
                        <li>Toronto, Ontario M9C 3J5</li>
                    </ul>
                    <ul className={styles.contact}>
                        <li>Contact Us (Central Office)</li>
                        <li>P : +1 253-863-8967</li>
                        <li>M : contact@designo.co</li>
                    </ul>
                </div>
                <div className={styles.rightFlexContainer}>
                    <div className={styles.iconContainer}>
                        <Image src="/assets/shared/desktop/icon-facebook.svg" alt="facebook icon" width="24" height="24"  className={styles.svg}/>
                        <Image src="/assets/shared/desktop/icon-youtube.svg" alt="youtube icon" width="24" height="24"  className={styles.svg}/>
                        <Image src="/assets/shared/desktop/icon-twitter.svg" alt="twitter icon" width="24" height="24"  className={styles.svg}/>
                        <Image src="/assets/shared/desktop/icon-pinterest.svg" alt="pinterest icon" width="24" height="24"  className={styles.svg}/>
                        <Image src="/assets/shared/desktop/icon-instagram.svg" alt="instagram icon" width="24" height="24"  className={styles.svg}/>
                    </div>
                </div>
            </div>
        </footer>
    )
}