
import styles from '../../styles/Locations/MiddleContainer.module.scss'

export default function MiddleContainer() {


    return (
        <div className={styles.container}>
            <div className={styles.map}>
            </div>
            <div className={styles.info}>
                <div className={styles.textContainer}>
                   <h1>Australia</h1>
                    <ul>
                        <li>Designo AU Office</li>
                        <li>19 Balonne Street</li>
                        <li>New South Wales 2443</li>
                    </ul>
                    <ul>
                        <li>Contact </li>
                        <li>P : (02) 6720 9092</li>
                        <li>M : contact@designo.au</li>
                    </ul> 
                </div>

                
            </div>
        </div>
    )
}