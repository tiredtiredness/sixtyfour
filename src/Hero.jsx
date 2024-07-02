import './Hero.css';
import Footer from './Footer';

export default function Hero() {
  return (
    <>
      <div className='hero'>
        <div className='hero__wrapper'>
          <p className='hero__title'>РЕСТОРАН ЕВРОПЕЙСКОЙ КУХНИ</p>
          <p className='hero__desc'>
            с панорамным видом на исторический центр Петербурга. <br />{' '}
            Насладитесь гастрономическим уютом с нами!
          </p>
          <p className='hero__desc'>
            Санкт-Петербург,&#32;
            <span className='desc__wrap'>наб. реки Мойки, 64</span>
          </p>
          <p className='hero__desc'>Время работы: 12:00 — 23:00, ежедневно</p>
        </div>

        <button className='phone-btn'>
          <a href='tel:+79110006400' className='phone-btn__link'>
            📞
          </a>
        </button>
      </div>
      <Footer className='footer'></Footer>
    </>
  );
}
