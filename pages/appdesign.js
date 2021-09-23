import styles from '../styles/AppDesign/AppDesign.module.scss'
import Hero from '../components/AppDesign/Hero'
import ProjectContainer from '../components/AppDesign/ProjectContainer'
import ImageNav from '../components/AppDesign/ImageNav'

export default function appDesign() {

    return (
        <div className={styles.container}>
            <Hero />
            <ProjectContainer />
            <ImageNav />
        </div>
    )
}