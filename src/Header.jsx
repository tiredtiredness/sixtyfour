import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isSideOpen, setIsSideOpen] = useState(false);

  const toggleMenu = () => {
    setIsSideOpen(!isSideOpen);
    document.querySelector('.menu-wrapper').classList.toggle('closed');
    document.querySelector('body').classList.toggle('closed--body');
    document.getElementById('open-menu').classList.toggle('hidden');
    document.getElementById('close-menu').classList.toggle('hidden');
  };

  return (
    <>
      {/* <div className='intro'>
        <img
          src='/images/landing_background_x2'
          alt=''
          className='intro__img'
        />
        <div className='intro__wrapper'>
          <h1 className='intro__title'>SIXTY FOUR</h1>
          <p className='intro__desc'>Здесь уютно и тепло!</p>
        </div>
      </div> */}
      <header className='header'>
        <div className='header__logo'>
          <NavLink to='/'>SIXTY FOUR</NavLink>
        </div>
        <div className='menu-wrapper closed'>
          <menu className='menu '>
            <ul className='menu-list'>
              <li className='menu-list__item'>
                <NavLink
                  className='menu-list__link'
                  href=''
                  to='about'
                  onClick={toggleMenu}
                >
                  О нас
                </NavLink>
              </li>
              <li className='menu-list__item'>
                <a href='#' className='menu-list__link'>
                  Меню
                </a>
              </li>
              <li className='menu-list__item'>
                <NavLink
                  className='menu-list__link'
                  href=''
                  to='contacts'
                  onClick={toggleMenu}
                >
                  Контакты
                </NavLink>
              </li>
            </ul>
            <a
              className='btn--feedback'
              href='https://yandex.ru/maps/org/sixty_four/180554432330/reviews/?add-review=true'
              target='_blank'
            >
              Оставить отзыв
            </a>
            <NavLink
              className='menu-list__link link--btn'
              href=''
              to='reserve'
              onClick={toggleMenu}
            >
              Забронировать
            </NavLink>
          </menu>
        </div>

        <button className='btn--menu' onClick={toggleMenu}>
          <img
            id='open-menu'
            src='/images/icons/burger-menu-svgrepo-com-2.svg'
            alt=''
          />
          <img
            id='close-menu'
            src='/images/icons/close-svgrepo-com.svg'
            alt=''
            className='hidden'
          />
        </button>
      </header>
    </>
  );
}
