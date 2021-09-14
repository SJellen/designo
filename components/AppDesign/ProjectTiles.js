
import styles from '../../styles/ProjectTile.module.scss'
import appData from '../../data/appData.json'
import Image from 'next/image'

export default function ProjectTiles() {

    const appTiles = appData.map((item) => (
        <div key={item.id} className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={`${item.image}`} alt="speaker" width="700" height="640"  className={styles.img}/>
            </div>
            <div className={styles.bottomContainer}>
                <h1>{item.name}</h1>
                <p>{item.description}</p>

            </div>
        </div>
    ))

    return (
        <div className={styles.flexContainer}>
            {appTiles}
        </div>
    )
}