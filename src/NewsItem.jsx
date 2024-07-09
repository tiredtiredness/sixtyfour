import './NewsItem.css';

export default function NewsItem({ title, date, desc, img }) {
  return (
    <>
      <div className='news-item'>
        <h3 className='news-item__title'>{title}</h3>
        <p className='news-item__desc'>{desc}</p>
        <p className='news-item__date'>{date}</p>
        <img className='news-item__img' src={img} alt='' />
      </div>
    </>
  );
}
