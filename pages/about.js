import styles from '../styles/About/About.module.scss'
import Hero from '../components/About/Hero'
import LocationNav from '../components/LocationNav'

export default function About() {

    return (
        <div className={styles.container}>
            <Hero />
            <LocationNav />
        </div>
    )
}