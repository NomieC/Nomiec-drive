import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { LinkBox, LinkOverlay } from "@chakra-ui/react"
import NextLink from "next/link"

export default function CardHome (props){

    const router = useRouter();

    const redirectToPage = () => {
      router.push('../characters');
    }
    return (
        <LinkBox as={NextLink} href={`${props.url}`} className={styles.getstarted} cursor={"pointer"} scroll={false}>
            {/* <img src={props.img} alt="Deskripsi gambar" loading="lazy"></img> */}
            <Image src={props.img} className={styles.cardHomeImg} layout='responsive' alt="card"/>
            <LinkOverlay as={"div"} href={`${props.url}`}>
                
            <p>{props.cardName}</p>
            </LinkOverlay>
        </LinkBox>  
    );
}