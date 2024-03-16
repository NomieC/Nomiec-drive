import { Card } from "@chakra-ui/react";
import Contacts from "../components/contact";
import CardAbout from "../components/CardAbout";
import styles from "../styles/about.module.css"
import IntroAboutUs from "../components/IntroAboutUs";
export default function About(){
    return(
        <div className={styles.about}>
            <div>
                <IntroAboutUs
                    together = {Contacts[0].together}
                />
            </div>
            <div className= {styles.bungkusCard}>
                {Contacts.map((contact, index) => (
                    <CardAbout
                        key={index}
                        name = {contact.name}
                        nim = {contact.nim}
                        job = {contact.job}
                        img = {contact.img}
                        instagram = {contact.instagram}
                    />
                ))}
            </div>
        </div>
    );

}