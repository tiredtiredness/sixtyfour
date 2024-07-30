import './Contacts.css';
import Footer from './Footer';

export default function Contacts() {
  return (
    <>
      <div className='contacts'>
        <div className='contacts__wrapper'>
          <iframe
            className='contacts__map'
            src='https://yandex.ru/map-widget/v1/?um=constructor%3A339e1d711423d64d5305b008dbd851e19bd90e6df4751e11432ede015e14bb9f&amp;source=constructor'
            width='560'
            height='600'
            frameBorder='0'
          ></iframe>
        </div>
        <div className='contacts__wrapper'>
          <div className='contacts__info'>
            <p className='contacts__address'>
              Адрес: г. Санкт-Петербург, наб. реки Мойки, 64
            </p>
            <p className='contacts__phone'>Телефон: +7 (911) 000-64-00</p>
            <p className='contacts__hours'>
              Часы работы: ежедневно, 12:00–23:00
            </p>
            {/* <p className='contacts__email'>Почта: TBA TBD soon</p> */}
            <div className='contacts__socials'>
              <p>Соцсети: </p>
              <a
                href='https://www.instagram.com/64rest'
                target='_blank'
                className='social__link'
              >
                <img
                  src='/images/icons/instagram-alt-svgrepo-com.svg'
                  alt=''
                  className='social__img'
                />
              </a>
              <a
                href='https://t.me/rest64'
                target='_blank'
                className='social__link'
              >
                <img
                  src='/images/icons/telegram-svgrepo-com.svg'
                  alt=''
                  className='social__img'
                />
              </a>
              <a
                href='https://vk.com/64rest'
                target='_blank'
                className='social__link'
              >
                <img
                  src='/images/icons/vk-svgrepo-com.svg'
                  alt=''
                  className='social__img'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
