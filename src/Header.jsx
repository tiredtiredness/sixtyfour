import { useState } from 'react';
import './Header.css';

export default function Header() {
  let isSideOpen,
    setIsSideOpen = useState(false);

  return (
    <>
      <header className='header'>
        <div className='header__logo'>
          <span>SIXTY FOUR</span>
        </div>
        <div className='menu-wrapper'>
          <menu className='menu'>
            <ul className='menu-list'>
              <li className='menu-list__item'>
                <a href=''>О нас</a>
              </li>
              <li className='menu-list__item'>
                <a href=''>Меню</a>
              </li>
              <li className='menu-list__item'>
                <a href=''>Контакты</a>
              </li>
            </ul>
            <a
              className='btn--feedback'
              href='https://yandex.ru/maps/org/sixty_four/180554432330/reviews/?add-review=true'
              target='_blank'
            >
              Оставить отзыв
            </a>
            <button className='header__btn btn--reserve'>
              Забронировать стол
            </button>
          </menu>
        </div>

        <button className='btn--menu'>
          <img src='src/images/icons/burger-menu-svgrepo-com-2.svg' alt='' />
        </button>
      </header>
    </>
  );
}
