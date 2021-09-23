import styles from '../../styles/Home/ImageNav.module.scss'
import WebDesignTile from '../ImageNavTile/WebDesignTile'
import GraphicDesignTile from '../ImageNavTile/GraphicDesign'

export default function ImageNav() {

    return (
        <div className={styles.container}>
                <div className={styles.topContainer}>
                    <WebDesignTile />
                </div>
                <div className={styles.bottomContainer}>
                    <GraphicDesignTile />
                </div>
        </div>
    )
}