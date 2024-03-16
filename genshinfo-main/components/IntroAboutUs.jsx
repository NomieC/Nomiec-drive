import Image from "next/image";
import styles from "../styles/about.module.css"

export default function IntroAboutUs(props){
    return(
        <div className={styles.introAboutUs}>
            <div className={styles.introText}>
                <h1>Who We Are</h1>
                <p>Kami merupakan Mahasiswa Universitas Multimedia Nusantara jurusan Informatika 2022 yang sedang membuat project Ujian Akhir Semester (UAS). Kami hanyalah para lelaki bujangan (kecuali Aurel dan Fidel) yang mempunyai semangat juang di Informatika (eak). Semangat untuk para Informatikaerrz</p>
            </div>
            <div className={styles.introImg}>
                <Image src={props.together} className={styles.introgmbr} alt="Gambar" />
            </div>
        </div>
    );
}