import styles from '../styles/Home/Home.module.scss'
import Hero from '../components/Home/Hero'
import IllustrationBox from '../components/Home/IllustrationBox'
import ImageNav from '../components/Home/ImageNav'

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <ImageNav />
      <IllustrationBox />
    </div>
  )
}
