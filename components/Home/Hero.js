import styles from '../../styles/Home/Hero.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {

    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <div className={styles.textContainer}>
                    <h1>Award-winning custom designs and digital branding solutions</h1>
                    <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                    <Link href="/webdesign"><a>LEARN MORE</a></Link>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/assets/home/desktop/image-hero-phone.png" alt="hero-phone" width="624" height="913"  className={styles.img}/>
                </div>
            </div>
        </div>
    )
}