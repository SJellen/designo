import styles from '../../styles/WebDesign/Hero.module.scss'

export default function Hero() {

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>Web Design</h1>
                <p>We build websites that serve as powerful marketing tools 
                    and bring memorable brand experiences.</p>
            </div>
        </div>
    )
}