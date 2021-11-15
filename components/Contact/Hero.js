import styles from '../../styles/Contact/Hero.module.scss'
import Link from 'next/link'
import useFormLogic from './useFormLogic'
import Image from 'next/image'

export default function About() {

    const {handleChange, formInfo, handleSubmit} = useFormLogic()

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
               <h2>Contact Us</h2>
                <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p> 
            </div>
            <form className={styles.form} id="form" onSubmit={handleSubmit}>
                <input placeholder="Name" onChange={handleChange} value={formInfo.name} type="text" id="name" name="name" className="name" />
                    <span className={styles.error} id="nameError"><p>Can't be empty</p> 
                        <div><Image src="/assets/contact/desktop/icon-error.svg" alt="error icon" width="20" height="20"  /></div> 
                    </span>
                <input placeholder="Email" onChange={handleChange} value={formInfo.email} type="text" id="email" name="email" className="email" />
                    <span className={styles.error} id="emailError"><p>Email not valid</p> 
                        <div><Image src="/assets/contact/desktop/icon-error.svg" alt="error icon" width="20" height="20"  /> </div>
                    </span>
                <input placeholder="Phone" onChange={handleChange} value={formInfo.phone} type="number" id="phone" className="phone" name="phone" />
                    <span className={styles.error} id="phoneError"><p>Can't be empty</p> 
                        <div><Image src="/assets/contact/desktop/icon-error.svg" alt="error icon" width="20" height="20"  /> </div>
                    </span>
                    
                <textarea placeholder="Your Message" onChange={handleChange} value={formInfo.message} type="text" id="message" className="textarea" name="message" />
                    <span className={styles.textareaError} id="textAreaError"><p>Cannot be empty</p> 
                        <div><Image src="/assets/contact/desktop/icon-error.svg" alt="error icon" width="20" height="20"  /> </div>
                    </span>
                    <button form="form" type="submit">SUBMIT</button>
            </form>     
        </div>
    )
}