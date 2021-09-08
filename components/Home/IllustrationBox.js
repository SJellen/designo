import styles from '../../styles/Home/IllustrationBox.module.scss'
import Image from 'next/image'

export default function IllustrationBox() {

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.topContainer}><Image src="/assets/home/desktop/illustration-passionate.svg" alt="open menu icon" width="202" height="202" /></div>
                <div className={styles.bottomContainer}>
                    <h3>PASSIONATE</h3>
                    <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.topContainer}><Image src="/assets/home/desktop/illustration-resourceful.svg" alt="open menu icon" width="202" height="202" /></div>
                <div className={styles.bottomContainer}>
                    <h3>RESOURCEFUL</h3>
                    <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.topContainer}><Image src="/assets/home/desktop/illustration-friendly.svg" alt="open menu icon" width="202" height="202" /></div>
                <div className={styles.bottomContainer}>
                    <h3>FRIENDLY</h3>
                    <p>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide..</p>
                </div>
            </div>
        </div>
    )
}