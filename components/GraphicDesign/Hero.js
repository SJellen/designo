import styles from '../../styles/GraphicDesign/Hero.module.scss'

export default function Hero() {

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>Graphic Design</h1>
                <p>We deliver eye-catching branding materials that are 
                    tailored to meet your business objectives.</p>
            </div>
        </div>
    )
}