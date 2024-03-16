import Image from 'next/image';
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from "../styles/news.module.css";

const MyCarousel = () => {
  const [initialRender, setInitialRender] = useState(true);

  const renderCustomPrevArrow = (onClickHandler, hasPrev) => (
    <button
      type="button"
      className={styles.Prev}
      onClick={onClickHandler}
      disabled={!hasPrev}
    >
      {"<"}
    </button>
  );

  const renderCustomNextArrow = (onClickHandler, hasNext) => (
    <button
      type="button"
      className={styles.Next}
      onClick={onClickHandler}
      disabled={!hasNext}
    >
      {">"}
    </button>
  );

  const handleSlideChange = (index) => {
    if (initialRender) {
      // Jika ini adalah render awal, setInitialRender menjadi false
      setInitialRender(false);
    }
  };

  return (
    <Carousel
      autoPlay
      showArrows
      showStatus={false}
      showThumbs={false}
      infiniteLoop
      renderArrowPrev={renderCustomPrevArrow}
      renderArrowNext={renderCustomNextArrow}
      className={styles.carouselContainer}
      selectedItem={initialRender ? 1 : 0}
      onChange={handleSlideChange}
    >
      <div>
        <Image src="/src/bgn1.png" alt="Image 1" layout="responsive" width={600} height={400} />
      </div>
      <div>
        <Image src="/src/bgn2.png" alt="Image 2" layout="responsive" width={600} height={400} />
      </div>
      <div>
        <Image src="/src/bgn3.png" alt="Image 3" layout="responsive" width={600} height={400} />
      </div>
      <div>
        <Image src="/src/bgn4.png" alt="Image 4" layout="responsive" width={600} height={400} />
      </div>
    </Carousel>
  );
};

export default MyCarousel;
