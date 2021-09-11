import styles from '../styles/AppDesign/AppDesign.module.scss'
import Hero from '../components/AppDesign/Hero'

export default function appDesign() {

    return (
        <div className={styles.container}>
            <Hero />
        </div>
    )
}