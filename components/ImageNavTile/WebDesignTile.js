// import styles from '../../styles/ImageNavTile.module.scss'
import styles from '../../styles/WebDesign/WebTileNav.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function WebDesignTile() {

    return (
       // eslint-disable-next-line @next/next/link-passhref
       <Link href="/webdesign" >
       <div className={styles.container}>
         {/* <div className={styles.imgContainer}>
            <div className={styles.imgContainerDesktop}>
                    <Image src="/assets/home/desktop/image-web-design-small.jpg" alt="laptop" width="541" height="308"  className={styles.img}/>
                </div>
                <div className={styles.imgContainerTablet}>
                    <Image src="/assets/home/tablet/image-web-design.jpg" alt="laptop" width="689" height="200"  className={styles.img}/>
                </div>
                <div className={styles.imgContainerMobile}>
                    <Image src="/assets/home/mobile/image-web-design-small.jpg" alt="laptop" width="327" height="250"  className={styles.img}/>
                </div> 
            </div> */}
         <div className={styles.textContainer}>
             <h2>WEB DESIGN</h2>
             <span>
                 <h4>VIEW PROJECTS</h4><Image src="/assets/shared/desktop/icon-right-arrow.svg" alt="right arrow" width="8" height="8"  className={styles.svg}/>
             </span> 
         </div>
     </div>  
     </Link>
    )
}