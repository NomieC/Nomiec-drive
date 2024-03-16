import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { Box } from "@chakra-ui/react";
import Image from 'next/image';
import logo from '../public/src/logoGenshin.png'
import cloud from '../public/src/cloudFix1.png';//shadow
import bg1 from '../public/src/bg1.jpg';
import Contacts from '../components/contact';
import CardHome from '../components/CardHome';
import CardList from '../components/CardList';
import { useRouter } from 'next/router';




export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.paral');
      const scroll = window.pageYOffset;
      console.log('Love me Love me say that YOU LOVE ME');
      elements.forEach(element => {
        const speed = parseFloat(element.dataset.speed);
        element.style.transform = `translateY(-${scroll * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToPage1 = () => {
    const page1Element = document.getElementById('page1');
    if (page1Element) {
      window.scrollTo({
        top: page1Element.offsetTop,
        behavior: 'smooth',
      });
    }
  };



  return (
    <Box className={styles.container} minW="container.md" width="100%">
      <div className={styles.banner}>
        <Image className={`paral ${styles.liyue}`} data-speed="-0.1" src={bg1} alt="liyue" />

        <Image className={`paral ${styles.welcomeTitle}`} src={logo} data-speed="0.4" alt='welcome' />

        <button className={`paral ${styles.btn}`} data-speed="0.3" type="button" onClick={scrollToPage1}>
          <strong className={styles.strong}>Get Started</strong>
          <div className={styles.containerstars}>
            <div className={styles.stars}></div>
          </div>

          <div className={styles.glow}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
        </button>

        <Image className={`paral ${styles.backgroundBoxShadow}`} alt='shadow' src={cloud} data-speed="0.3" />
      </div>

      <div id='page1' className={styles.page1}>
        <h2>GenshInfo gives the information you need</h2>
        <h4>Choose what you need!</h4>
        <div className={styles.cardGetStarted}>
          {CardList.map((kartuName, index) => (
              <CardHome
              key={index}
              cardImg = {kartuName.cardImg}
              cardName = {kartuName.cardName}
              img = {kartuName.img}
              url={kartuName.url}
              />
          ))}
        </div>
      </div>
    </Box>
  )
}
