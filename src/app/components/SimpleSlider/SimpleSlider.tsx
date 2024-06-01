'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from './SimpleSlider.module.css'; 
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

const SimpleSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const images = [
    { src: '/austria.png', text: 'Vienna, Austria', ads: '10 ads' },
    { src: '/pakistan.png', text: 'Islamabad, Pakistan', ads: '20 ads' },
    { src: '/swed.png', text: 'Stockholm, Sweden', ads: '15 ads' },
    { src: '/dub.png', text: 'Dubai, UAE', ads: '25 ads' },
    { src: '/new.png', text: 'New York, USA', ads: '30 ads' },
    { src: '/Nairobi.png', text: 'Nairobi, Kenya', ads: '5 ads' },
    { src: '/london.png', text: 'London, UK', ads: '18 ads' },
    { src: '/Kampala.png', text: 'Kampala, Uganda', ads: '7 ads' }
  ];
  const imagesPerSlide = 4;
  const totalSlides = Math.ceil(images.length / imagesPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);
  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.heading}>Popular Locations</h2>
      <div className={styles.sliderWrapper}>
        <div className={styles.slider} ref={slideRef}>
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className={styles.slide}>
              {images.slice(slideIndex * imagesPerSlide, (slideIndex + 1) * imagesPerSlide).map((image, index) => (
                <div key={index} className={styles.imageContainer}>
                  <Image src={image.src} alt={`Image ${index}`} width={300} height={400} className={styles.image}/>
                  <div className={styles.overlay}>
                    <p className={styles.imageText}>
                      <FaMapMarkerAlt className={styles.icon} /> {image.text}
                      <br />
                      <span className={styles.adsText}>({image.ads})</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button onClick={prevSlide} className={styles.prev}>
        <FaChevronLeft />
      </button>
      <button onClick={nextSlide} className={styles.next}>
        <FaChevronRight />
      </button>
    </div>
  );
};
export default SimpleSlider;

