import styles from "../styles/GetInTouch.module.scss"
import Image from 'next/image'
import Link from 'next/link'

export default function GetInTouch() {

    return (
        <div className={styles.container}>
            <div className={styles.flexContainer}>  
                <div className={styles.leftContainer}>
                    <h1>Let’s talk about your project</h1>
                    <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                </div>
                <div className={styles.rightContainer}>
                    <div>
                       <Link href="/contact"><a>GET IN TOUCH</a></Link> 
                    </div>
                </div>
            </div>
        </div>
    )
}