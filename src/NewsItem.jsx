export default function NewsItem({ title, date, content, img }) {
  return (
    <>
      <div className='news-item'>
        <h3 className='news-item__title'>{title}</h3>
        <p className='news-item__desc'>{content}</p>
        <span>{date}</span>
        <img src={img} alt='' />
      </div>
    </>
  );
}
