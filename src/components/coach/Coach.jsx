import React from 'react';
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
import './Swiper.scss';

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

export const Coach = () => {
  return (
    <section className={styles.coach}>
      <div className={`${styles.CoachDiv} container grid`}>
        <h2 className={styles.heading}>Профессиональные тренеры</h2>
        <div className={styles.content}>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            modules={[Navigation, Scrollbar]}
            navigation={{
              prevEl: '.prevButton',
              nextEl: '.nextButton',
            }}
            scrollbar={{
              el: '.swiper-scrollbar',
              hide: false,
              draggable: true,
            }}
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
        </div>
        <div className={styles.navigationButtons}>
          <button
            className={`${styles.prevButton} prevButton`}
            data-swiper-button-prev
          >
            <img src={leftarrow} alt="Предыдущий" />
          </button>
          <button
            className={`${styles.nextButton} nextButton`}
            data-swiper-button-next
          >
            <img src={rightarrow} alt="Следующий" />
          </button>
        </div>
        <div className={` ${styles.scrollbar} swiper-scrollbar`}></div>
      </div>
    </section>
  );
};
