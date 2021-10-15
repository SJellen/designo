
import styles from '../../styles/Locations/TopContainer.module.scss'

export default function TopContainer() {

    
    return (
        <div className={styles.container}>
            <div className={styles.info}></div>
            <div className={styles.map}>{myMap}</div>
        </div>
    )
}