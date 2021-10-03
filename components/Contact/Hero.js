import styles from '../../styles/Contact/Hero.module.scss'
import Link from 'next/link'
import useFormLogic from './useFormLogic'

export default function About() {

    const {handleChange, formInfo} = useFormLogic()

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
               <h2>Contact Us</h2>
                <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p> 
            </div>
            <form className={styles.form}>
                <input placeholder="Name" onChange={handleChange} value={formInfo.name} type="text" id="name" name="name" className="name"/>
                <input placeholder="Email" id="email" className="email"/>
                <input placeholder="Phone" id="phone" className="phone"/>
                <textarea placeholder="Your Message" className="textarea" />
                    <Link href="/contact"><a>SUBMIT</a></Link>
            </form>
            
            
        </div>
    )
}