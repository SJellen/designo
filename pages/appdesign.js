import styles from '../styles/AppDesign/AppDesign.module.scss'
import Hero from '../components/AppDesign/Hero'
import ProjectContainer from '../components/AppDesign/ProjectContainer'

export default function appDesign() {

    return (
        <div className={styles.container}>
            <Hero />
            <ProjectContainer />
        </div>
    )
}