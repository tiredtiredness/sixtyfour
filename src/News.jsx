import NewsItem from './NewsItem.jsx';

export default function News() {
  return (
    <>
      <div className='news__container'>
        <NewsItem
          title='123'
          date={'12.12.12'}
          content={'123'}
          img={''}
        ></NewsItem>
      </div>
    </>
  );
}
