import './ReserveForm.css';

export default function ReserveForm() {
  return (
    <>
      <div className='form-wrapper'>
        <form action='' className='reserve-form'>
          <h3 className='form__title'>Заявка на бронь</h3>
          <input
            type='text'
            name='name'
            id='name'
            required
            placeholder='Ваше имя'
            maxLength='70'
          />
          <input
            type='tel'
            name='phone'
            id='phone'
            required
            placeholder='Ваш номер телефона'
          />
          <input
            type='date'
            name='date'
            id='date'
            required
            placeholder='Дата'
          />
          <input
            type='time'
            name='time'
            id='time'
            required
            placeholder='Время'
            min='12:00'
            max='22:00'
          />
          <input
            type='number'
            name='guests'
            id='guests'
            required
            placeholder='Количество гостей'
            min='1'
          />
          <textarea
            name='comment'
            id='comment'
            placeholder='Комментарий'
          ></textarea>
          <button className='reserve-form__submit-btn' type='submit'>
            Отправить
          </button>
        </form>
      </div>
    </>
  );
}
