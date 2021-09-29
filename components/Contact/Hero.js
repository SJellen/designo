import styles from '../../styles/Contact/Hero.module.scss'

export default function About() {

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
               <h2>Contact Us</h2>
                <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p> 
            </div>
            <div className={styles.form}>
                <input placeholder="name" id="name" className="name"/>
                <input placeholder="email" id="email" className="email"/>
                <input placeholder="phone" id="phone" className="phone"/>
                <textarea placeholder="message" className="textarea"/>
            </div>
        </div>
    )
}