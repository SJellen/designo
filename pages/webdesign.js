import styles from '../styles/WebDesign/WebDesign.module.scss'
import Hero from '../components/WebDesign/Hero'
import ProjectContainer from '../components/WebDesign/ProjectContainer'
import ImageNav from '../components/WebDesign/ImageNav'

export default function WebDesign() {

    return (
        <div className={styles.container}>
            <Hero />
            <ProjectContainer />
            <ImageNav />
        </div>
    )
}