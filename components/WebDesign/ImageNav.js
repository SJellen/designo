import styles from '../../styles/Home/ImageNav.module.scss'
import AppDesignTile from '../ImageNavTile/AppDesignTile'
import GraphicDesignTile from '../ImageNavTile/GraphicDesign'

export default function ImageNav() {

    return (
        <div className={styles.container}>
                <div className={styles.topContainer}>
                    <AppDesignTile />
                </div>
                <div className={styles.bottomContainer}>
                    <GraphicDesignTile />
                </div>
        </div>
    )
}