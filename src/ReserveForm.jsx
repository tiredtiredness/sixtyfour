import axios from 'axios';
import './ReserveForm.css';
import { useState } from 'react';

const monthNames = [
  'янв',
  'фев',
  'мар',
  'апр',
  'май',
  'июн',
  'июл',
  'авг',
  'сен',
  'окт',
  'ноя',
  'дек',
];

export default function ReserveForm() {
  const [showSuccessWindow, setShowSuccessWindow] = useState(false);
  const [showErrorWindow, setShowErrorWindow] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [comment, setComment] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const errors = form.querySelectorAll('.input__error:not(.hidden)');
    if (errors.length > 0) {
      return; // Если есть ошибки, не отправляем форму
    }

    const inputDate = new Date(date);
    const inputDay = inputDate.getDate();
    const inputMonth = inputDate.getMonth();
    const inputYear = inputDate.getFullYear();
    const formattedDate = `${inputDay} ${monthNames[inputMonth]} ${inputYear}`;

    const templateParams = {
      name,
      phone,
      date: formattedDate,
      time,
      guestCount,
      comment,
    };

    emailjs.send('service_c0k1icq', 'template_z0x9fx9', templateParams).then(
      response => {
        setShowSuccessWindow(true);
      },
      error => {
        setShowErrorWindow(true);
      }
    );

    console.log(name, phone, date, time, guestCount);
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
  }

  return (
    <>
      <div className='form-wrapper'>
        <form
          name='reserve'
          id='reserve'
          className='reserve-form'
          onSubmit={handleSubmit}
          method='POST'
          data-netlify='true'
        >
          <h2 className='form__title'>Заявка на бронь</h2>
          <label className='form__label' htmlFor=''>
            Ваше имя
            <input
              className='form__input'
              type='text'
              name='name'
              value={name}
              id='name'
              required
              maxLength='70'
              onChange={handleName}
            />
            <div className='input__error hidden'>Заполните поле</div>
          </label>
          <label className='form__label' htmlFor=''>
            Ваш номер телефона
            <input
              className='form__input'
              type='tel'
              name='phone'
              id='phone'
              required
              value={phone}
              onChange={handlePhone}
            />
            <div className='input__error hidden'>
              Введите корректный номер телефона
            </div>
          </label>
          <div className='datetime__wrapper'>
            <label className='form__label' htmlFor=''>
              Дата
              <input
                className='form__input'
                type='date'
                name='date'
                id='date'
                required
                value={date}
                onChange={handleDate}
              />
              <div className='input__error hidden'>Заполните поле</div>
            </label>
            <label className='form__label' htmlFor=''>
              Время
              <input
                className='form__input'
                type='time'
                name='time'
                id='time'
                required
                placeholder
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
            Количество гостей
            <input
              className='form__input'
              type='number'
              name='guestCount'
              id='guestCount'
              required
              min='1'
              value={guestCount}
              onChange={e => {
                setGuestCount(e.target.value);
              }}
            />
            <div className='input__error hidden'>Заполните поле</div>
          </label>
          <label htmlFor=''>
            Комментарий
            <textarea
            className='form__textarea'
              name='comment'
              id='comment'
              value={comment}
              onChange={e => {
                setComment(e.target.value);
              }}
            ></textarea>
          </label>

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
              <br />
              <br />
              Если в течение 15 минут с Вами не связались, <br />
              попробуйте забронировать по телефону +7 (911) 000-64-00
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

      {showErrorWindow && (
        <div className='modal'>
          <div className='modal__content'>
            <h3 className='modal__title'>Возникла ошибка...</h3>
            <p className='modal__desc'>
              Попробуйте забронировать по телефону <br /> +7 (911) 000-64-00
            </p>
            <button
              onClick={() => setShowErrorWindow(false)}
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
