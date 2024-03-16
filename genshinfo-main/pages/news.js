import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import styles from "../styles/news.module.css"
import Image from 'next/image';
import Banner from "../public/src/bannerfix.jpg"
import MyCarousel from '../components/Carousel';

export default function NewsBaru() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/src/GenshinTweet.csv');
      const csvData = await response.text();
      const parsedData = Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
      }).data;
      setData(parsedData);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
        <div className={styles.banner}>
            {/* <Image src= {Banner} className={styles.bannerImg} /> */}
            <MyCarousel />
        </div>
        <div className={styles.newsTitle}>
            <h1>Genshin News</h1>
        </div>
        {data.length ? (
                <div className={styles.newsCard}>
                    {data.map((row, index) => (
                        <div className={styles.kartuSendiri} key={index}>
                            <div className={styles.dalemKartu} key={index}>
                                <div className={styles.headCard}>
                                    <div className={styles.username}>{row.username}</div>
                                    <div className={styles.date}>{row.created_at}</div>
                                </div>
                                <div className={styles.caption}>{row.full_text}</div>
                                <div className={styles.moreButton}><a href={row.media_url_https} target="_blank">more</a></div>
                            </div>
                        </div>
                    ))}
                </div>
        ) : null}
    </div>
  );
}
