import './ReserveForm.css';
import { useState } from 'react';

export default function ReserveForm() {
  const [showSuccessWindow, setShowSuccessWindow] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [comment, setComment] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const errors = form.querySelectorAll('.input__error:not(.hidden)');
    if (errors.length > 0) {
      return; // Если есть ошибки, не отправляем форму
    }
    setShowSuccessWindow(true);
    setName('');
    setPhone('');
    setDate('');
    setTime('');
    setGuestCount('');
    setComment('');
  }

  function handleName(e) {
    let name = e.target.value;
    setName(name);
    if (name.trim() == '') {
      document
        .querySelector('.form__input#name')
        .nextSibling.classList.remove('hidden');
    } else {
      document
        .querySelector('.form__input#name')
        .nextSibling.classList.add('hidden');
    }
  }

  function handlePhone(e) {
    let phone = e.target.value;
    setPhone(phone);
    const phonePattern =
      /^\+?[1-9]\d{0,2}[ \-]?\(?\d{1,4}\)?[ \-]?\d{1,4}[ \-]?\d{1,4}[ \-]?\d{1,9}$/;

    if (phone.trim() != '' && phonePattern.test(phone.trim())) {
      document
        .querySelector('.form__input#phone')
        .nextSibling.classList.add('hidden');
    } else {
      document
        .querySelector('.form__input#phone')
        .nextSibling.classList.remove('hidden');
    }
  }

  function handleDate(e) {
    const input = e.target.value;
    setDate(input);
    let inputDate = new Date(input);
    const today = new Date();

    if (inputDate < today) {
      const errorMsg = document.querySelector('.form__input#date').nextSibling;
      errorMsg.classList.remove('hidden');
      errorMsg.textContent = 'Некорректная дата';
    } else if (inputDate >= today) {
      document
        .querySelector('.form__input#date')
        .nextSibling.classList.add('hidden');
    }
  }

  return (
    <>
      <div className='form-wrapper'>
        <form name='reserve' className='reserve-form' onSubmit={handleSubmit} method='POST' netlify>
          <h3 className='form__title'>
            Заявка на бронь
            <br />
            НА ДАННЫЙ МОМЕНТ НЕ РАБОТАЕТ
          </h3>
          <label className='form__label' htmlFor=''>
            <input
              className='form__input'
              type='text'
              name='name'
              value={name}
              id='name'
              required
              placeholder='Ваше имя'
              maxLength='70'
              onChange={handleName}
            />
            <div className='input__error hidden'>Заполните поле</div>
          </label>
          <label className='form__label' htmlFor=''>
            {' '}
            <input
              className='form__input'
              type='tel'
              name='phone'
              id='phone'
              required
              placeholder='Ваш номер телефона'
              value={phone}
              onChange={handlePhone}
            />
            <div className='input__error hidden'>
              Введите корректный номер телефона
            </div>
          </label>
          <div className='datetime__wrapper'>
            <label className='form__label' htmlFor=''>
              <input
                className='form__input'
                type='date'
                name='date'
                id='date'
                required
                placeholder='Дата'
                value={date}
                onChange={handleDate}
              />
              <div className='input__error hidden'>Заполните поле</div>
            </label>
            <label className='form__label' htmlFor=''>
              <input
                className='form__input'
                type='time'
                name='time'
                id='time'
                required
                placeholder='Время'
                min='12:00'
                max='22:00'
                value={time}
                onChange={e => {
                  setTime(e.target.value);
                }}
              />
              <div className='input__error hidden'>Заполните поле</div>
            </label>
          </div>

          <label className='form__label' htmlFor=''>
            <input
              className='form__input'
              type='number'
              name='guestCount'
              id='guestCount'
              required
              placeholder='Количество гостей'
              min='1'
              value={guestCount}
              onChange={e => {
                setGuestCount(e.target.value);
              }}
            />
            <div className='input__error hidden'>Заполните поле</div>
          </label>

          <textarea
            name='comment'
            id='comment'
            placeholder='Комментарий'
            value={comment}
            onChange={e => {
              setComment(e.target.value);
            }}
          ></textarea>
          <button className='reserve-form__submit-btn' type='submit'>
            Отправить
          </button>
        </form>
      </div>

      {showSuccessWindow && (
        <div className='modal'>
          <div className='modal__content'>
            <h3 className='modal__title'>Спасибо!</h3>
            <p className='modal__desc'>
              Ваша заявка была отправлена. <br /> Ожидайте звонка для
              подтверждения бронирования.
            </p>
            <button
              onClick={() => setShowSuccessWindow(false)}
              className='modal__close-btn'
            >
              <img
                className='close-btn__img'
                src='/images/icons/close-svgrepo-com.svg'
                alt=''
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
