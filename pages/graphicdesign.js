import styles from '../styles/GraphicDesign/GraphicDesign.module.scss'
import Hero from '../components/GraphicDesign/Hero'
import ProjectContainer from '../components/GraphicDesign/ProjectContainer'

export default function graphicDesign() {

    return (
        <div className={styles.container}>
            <Hero />
            <ProjectContainer />
        </div>
    )
}