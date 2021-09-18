import styles from '../styles/Contact/Contact.module.scss'
import Hero from '../components/Contact/Hero'
import LocationNav from '../components/LocationNav'

export default function Contact() {

    return (
        <div className={styles.container}>
            <Hero />
            <LocationNav />
        </div>
    )
}