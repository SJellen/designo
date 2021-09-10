import styles from '../../styles/ImageNavTile.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function GraphicDesignTile() {

    return (
         // eslint-disable-next-line @next/next/link-passhref
         <Link href="/graphicdesign" >
         <div className={styles.container}>
           <div className={styles.imgContainer}>

           </div>
           <div>
               <h2>GRAPHIC DESIGN</h2>
               <span className={styles.textContainer}>
                   <h4>VIEW PROJECTS</h4><Image src="/assets/shared/desktop/icon-right-arrow.svg" alt="right arrow" width="8" height="8"  className={styles.svg}/>
               </span>
               
           </div>
       </div>  
       </Link>
    )


}