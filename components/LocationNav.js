import styles from '../styles/LocationNav.module.scss'
import Image from 'next/image'

export default function LocationNav() {

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.topContainer}><Image src="/assets/home/desktop/illustration-passionate.svg" alt="open menu icon" width="202" height="202" /></div>
                <div className={styles.bottomContainer}>
                    <h3>CANADA</h3>
                    <a>SEE LOCATION</a>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.topContainer}><Image src="/assets/home/desktop/illustration-resourceful.svg" alt="open menu icon" width="202" height="202" /></div>
                <div className={styles.bottomContainer}>
                    <h3>AUSTRALIA</h3>
                    <a>SEE LOCATION</a>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.topContainer}><Image src="/assets/home/desktop/illustration-friendly.svg" alt="open menu icon" width="202" height="202" /></div>
                <div className={styles.bottomContainer}>
                    <h3>UNITED KINGDOM</h3>
                    <a>SEE LOCATION</a>
                </div>
            </div> 
        </div>
    )
}