import styles from '../../styles/AppDesign/Hero.module.scss'

export default function Hero() {

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>App Design</h1>
                <p>Our mobile designs bring intuitive digital solutions
                    to your customers right at their fingertips.</p>
            </div>
        </div>
    )
}