import styles from '../../styles/About/Hero.module.scss'
import Image from 'next/image'

export default function About() {

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2>About Us</h2>
                <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/assets/about/desktop/image-about-hero.jpg" alt="speaker" width="476" height="480"  className={styles.img}/>
            </div>
           
        </div>
    )
}