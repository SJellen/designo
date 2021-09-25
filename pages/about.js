import styles from '../styles/About/About.module.scss'
import Hero from '../components/About/Hero'
import LocationNav from '../components/LocationNav'
import Talent from '../components/About/Talent'

export default function About() {

    return (
        <div className={styles.container}>
            <Hero />
            <Talent />
            <LocationNav />
        </div>
    )
}