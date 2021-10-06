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
            <form className={styles.form} id="form" >
                <input placeholder="Name" onChange={handleChange} value={formInfo.name} type="text" id="name" name="name" className="name" />
                    <span className={styles.error}>Can't be empty</span>
                <input placeholder="Email" onChange={handleChange} value={formInfo.email} type="text" id="email" name="email" className="email" />
                    <span className={styles.error}>Can't be empty</span>
                <input placeholder="Phone" onChange={handleChange} value={formInfo.phone} type="text" id="phone" className="phone" />
                    <span className={styles.error}>Can't be empty</span>
                <textarea placeholder="Your Message" onChange={handleChange} value={formInfo.message} type="text" id="message" className="textarea" />
                    <span className={styles.textareaError}>Can't be empty</span>
                    <Link href="/contact"><a>SUBMIT</a></Link>
            </form>     
        </div>
    )
}