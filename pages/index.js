import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home/Home.module.scss'
import Hero from '../components/Home/Hero'
import IllustrationBox from '../components/Home/IllustrationBox'

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <IllustrationBox />
    </div>
  )
}
