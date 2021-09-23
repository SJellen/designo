import styles from '../../styles/Home/ImageNav.module.scss'
import AppDesignTile from '../ImageNavTile/AppDesignTile'
import WebDesignTile from '../ImageNavTile/WebDesignTile'

export default function ImageNav() {

    return (
        <div className={styles.container}>
                <div className={styles.topContainer}>
                    <AppDesignTile />
                </div>
                <div className={styles.bottomContainer}>
                    <WebDesignTile />
                </div>
        </div>
    )
}