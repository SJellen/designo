import styles from '../styles/Locations/Locations.module.scss'
import TopContainer from '../components/Locations/TopContainer'
import MiddleContainer from '../components/Locations/MiddleContainer'
import BottomContainer from '../components/Locations/BottomContainer'

export default function Locations() {

    return (
        <div className={styles.container}>
            <TopContainer />
            <MiddleContainer />
            <BottomContainer />
        </div>
    )
}