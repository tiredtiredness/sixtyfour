import './ReserveForm.css';

export default function ReserveForm() {
  return (
    <>
      <div className='form-wrapper'>
        <form action='' className='reserve-form'>
          <h1>Заявка на бронь</h1>
          <input
            type='text'
            name='name'
            id='name'
            required
            placeholder='Ваше имя'
            maxlength='70'
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
          <textarea name='comment' id='comment'></textarea>
          <button type='submit'>Заявка на бронь</button>
        </form>
      </div>
    </>
  );
}
