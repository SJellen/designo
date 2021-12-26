import styles from '../../styles/Home/WebDesignTileHome.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function WebDesignTileHome() {

    return (
       // eslint-disable-next-line @next/next/link-passhref
       <Link href="/webdesign" >
       <div className={styles.container}>
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