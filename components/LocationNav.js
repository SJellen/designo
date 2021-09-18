import styles from '../styles/LocationNav.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function LocationNav() {

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.topContainer}><Image src="/assets/shared/desktop/illustration-canada.svg" alt="location icon" width="202" height="202" /></div>
                <div className={styles.bottomContainer}>
                    <h3>CANADA</h3>
                    <div>
                       <Link href="/locations"><a>SEE LOCATION</a></Link> 
                    </div>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.topContainer}><Image src="/assets/shared/desktop/illustration-australia.svg" alt="location icon" width="202" height="202" /></div>
                <div className={styles.bottomContainer}>
                    <h3>AUSTRALIA</h3>
                    <div>
                       <Link href="/locations"><a>SEE LOCATION</a></Link> 
                    </div>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.topContainer}><Image src="/assets/shared/desktop/illustration-united-kingdom.svg" alt="location icon" width="202" height="202" /></div>
                <div className={styles.bottomContainer}>
                    <h3>UNITED KINGDOM</h3>
                    <div>
                       <Link href="/locations"><a>SEE LOCATION</a></Link> 
                    </div>
                </div>
            </div> 
        </div>
    )
}