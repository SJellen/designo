
import styles from '../../styles/Locations/BottomContainer.module.scss'

export default function BottomContainer() {


    return (
        <div className={styles.container}>
             <div className={styles.info}>
                <h1>United Kingdom</h1>
                    <ul>
                        <li>Designo UK Office</li>
                        <li>13  Colorado Way</li>
                        <li>Rhyd-y-fro SA8 9GA</li>
                    </ul>
                    <ul>
                        <li>Contact </li>
                        <li>P : 078 3115 1400</li>
                        <li>M : contact@designo.uk</li>
                    </ul>
             </div>
            <div className={styles.map}>
            </div>
        </div>
    )
}