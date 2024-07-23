import './Hero.css';
import 'animate.css';

export default function Hero() {
  return (
    <>
      {/* <div className='running-line__wrapper'>
        <a href='#' className='running-line' behavior='' direction=''>
          НОВОЕ МЕНЮ
        </a>
        <a href='#' className='running-line' behavior='' direction=''>
          НОВОЕ МЕНЮ
        </a>
      </div> */}
      <div className='hero'>
        <div className='hero__wrapper'>
          <h1 className='hero__title animate__animated animate__fadeInDown animate__delay-2s animate__slow'>
            РЕСТОРАН ЕВРОПЕЙСКОЙ КУХНИ
            ЭТО ПОДДЕЛКА 
            ЭТО НЕОФИЦИАЛЬНЫЙ САЙТ
          </h1>
          <div className='desc__wrapper animate__animated animate__fadeInUp animate__delay-2s animate__slow'>
            <p className='hero__desc '>
              с панорамным видом на исторический центр Петербурга. <br />{' '}
              Насладитесь гастрономическим уютом с нами!
            </p>
            <p className='hero__desc'>
              Санкт-Петербург,&#32;
              <span className='desc__wrap'>наб. реки Мойки, 64</span>
            </p>
            <p className='hero__desc'>Время работы: 12:00 — 23:00, ежедневно</p>
          </div>
        </div>

        <button className='phone-btn animate__animated animate__fadeInRight animate__delay-4s animate__slow'>
          <a href='tel:+79110006400' className='phone-btn__link'>
            📞
          </a>
        </button>
      </div>
      <div className='gallery'>
        <div className='gallery__wrapper'>
          <img className='gallery__img' src='/images/gallery/1.jpg' alt='' />
        </div>
        <div className='gallery__wrapper'>
          <img className='gallery__img' src='/images/gallery/2.jpg' alt='' />
        </div>
        <div className='gallery__wrapper'>
          <img className='gallery__img' src='/images/gallery/3.jpg' alt='' />
        </div>
        <div className='gallery__wrapper'>
          <video
            className='gallery__img'
            src='/images/gallery/IMG_2.MP4'
            autoPlay='autoplay'
            loop
            muted
            playsInline
            preload='true'
            alt=''
          >
            <source src='' />
          </video>
        </div>
        <div className='gallery__wrapper'>
          <img className='gallery__img' src='/images/gallery/4.jpg' alt='' />
        </div>
        <div className='gallery__wrapper'>
          <img className='gallery__img' src='/images/gallery/5.jpg' alt='' />
        </div>
        <div className='gallery__wrapper'>
          <img className='gallery__img' src='/images/gallery/6.jpg' alt='' />
        </div>
        <div className='gallery__wrapper'>
          <img className='gallery__img' src='/images/gallery/7.jpg' alt='' />
        </div>
        <div className='gallery__wrapper'>
          <video
            className='gallery__img'
            autoPlay='autoplay'
            loop
            muted
            playsInline
            preload
            alt=''
          >
            <source src='/images/gallery/IMG_3.MP4' />
          </video>
        </div>
        <div className='gallery__wrapper'>
          <img className='gallery__img' src='/images/gallery/8.jpg' alt='' />
        </div>
        <div className='gallery__wrapper'>
          <img className='gallery__img' src='/images/gallery/9.jpg' alt='' />
        </div>
        <div className='gallery__wrapper'>
          <img className='gallery__img' src='/images/gallery/10.jpg' alt='' />
        </div>
        <div className='gallery__wrapper'>
          <img className='gallery__img' src='/images/gallery/11.jpg' alt='' />
        </div>
        <div className='gallery__wrapper'>
          <img className='gallery__img' src='/images/gallery/12.jpg' alt='' />
        </div>
        <div className='gallery__wrapper'>
          <video
            className='gallery__img'
            autoPlay='autoplay'
            loop
            muted
            playsInline
            preload
            alt=''
          >
            <source src='/images/gallery/IMG_1.MP4' />
          </video>
        </div>
        <div className='gallery__wrapper'>
          <img className='gallery__img' src='/images/gallery/13.jpg' alt='' />
        </div>
        <div className='gallery__wrapper'>
          <img className='gallery__img' src='/images/gallery/14.jpg' alt='' />
        </div>
        <div className='gallery__wrapper'>
          <img className='gallery__img' src='/images/gallery/15.jpg' alt='' />
        </div>
        <div className='gallery__wrapper'>
          <img className='gallery__img' src='/images/gallery/16.jpg' alt='' />
        </div>
        <div className='gallery__wrapper'>
          <img className='gallery__img' src='/images/gallery/17.jpg' alt='' />
        </div>
        <div className='gallery__wrapper'>
          <img className='gallery__img' src='/images/gallery/18.jpg' alt='' />
        </div>

        <div className='gallery__wrapper'>
          <video
            className='gallery__img'
            autoPlay='autoplay'
            loop
            muted
            playsInline
            preload
            alt=''
          >
            <source src='/images/gallery/IMG_4.MP4' />
          </video>
        </div>
      </div>
    </>
  );
}
