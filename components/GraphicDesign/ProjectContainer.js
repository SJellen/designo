import styles from '../../styles/ProjectContainer.module.scss'
import ProjectTiles from './ProjectTiles'

export default function ProjectContainer() {

    return (
        <div className={styles.container}>
            <ProjectTiles />
        </div>
    )
}