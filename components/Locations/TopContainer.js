import styles from '../../styles/Locations/TopContainer.module.scss'

export default function TopContainer() {

    
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div>
                    <h1>Canada</h1>
                    <ul>
                        <li>Designo Central Office</li>
                        <li>3886 Wellington Street</li>
                        <li>Toronto, Ontario M9C 3J5</li>
                    </ul>
                    <ul>
                        <li>Contact </li>
                        <li>P : +1 253-863-8967</li>
                        <li>M : contact@designo.co</li>
                    </ul>
                </div>
            </div>
            <div className={styles.map}>
            </div>
        </div>
    )
}