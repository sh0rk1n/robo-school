import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { CoachCard } from '../../shared/ui/CoachCard/CoachCard';
import irina from '../../shared/assets/img/coach_irina.svg';
import marina from '../../shared/assets/img/coach_marina.svg';
import max from '../../shared/assets/img/coach_max.svg';
import kostya from '../../shared/assets/img/coach_kostya.svg';
import liza from '../../shared/assets/img/coach_liza.svg';
import leftarrow from '../../shared/assets/img/leftarrow.svg';
import rightarrow from '../../shared/assets/img/rightarrow.svg';
import styles from './Coach.module.scss';
import 'swiper/css/scrollbar';
import 'swiper/css';

export const Coach = () => {
  const coaches = [
    { img: irina, name: 'Ирина Лайм', descr: 'преподаватель по робототехнике' },
    {
      img: marina,
      name: 'Марина Орлова',
      descr: 'преподаватель по робототехнике',
    },
    {
      img: max,
      name: 'Максим Петров',
      descr: 'преподаватель по программированию',
    },
    {
      img: kostya,
      name: 'Константин Назаров',
      descr: 'преподаватель по робототехнике',
    },
    {
      img: liza,
      name: 'Лиза Весенняя',
      descr: 'преподаватель по программированию',
    },
  ]; // todo: перенести на free бд

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  // useEffect(() => {
  //   if (swiperRef.current) {
  //     swiperRef.current.params.navigation.prevEl = prevRef.current;
  //     swiperRef.current.params.navigation.nextEl = nextRef.current;
  //     swiperRef.current.navigation.init();
  //     swiperRef.current.navigation.update();
  //   }
  // }, []);

  return (
    <section className={styles.coach}>
      <div className={`${styles.CoachDiv} container`}>
        <h2 className={styles.heading}>Профессиональные тренеры</h2>
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={3}
          modules={[Navigation, Scrollbar]}
          scrollbar={{
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true,
          }}
          loop={true}
        >
          {coaches.map((coach, index) => (
            <SwiperSlide key={index} className={styles.Swiper}>
              <CoachCard
                img={coach.img}
                name={coach.name}
                descr={coach.descr}
                
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.navigationButtons}>
          <button ref={prevRef} className={styles.prevButton}>
            <img src={leftarrow} alt="Предыдущий" />
          </button>
          <button ref={nextRef} className={styles.nextButton}>
            <img src={rightarrow} alt="Следующий" />
          </button>
        </div>
        {/* <div className="swiper-scrollbar"></div> */}
      </div>
    </section>
  );
};
