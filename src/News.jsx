import NewsItem from './NewsItem.jsx';

import './News.css';

//от старой к новой
const news = [
  {
    title: 'Летнее обновление меню в ресторане SIXTY FOUR',
    desc: 'Бренд-шеф Владислав Савельев, следуя принципу сезонности, добавил в меню блюда с ингредиентами, которые доступны только в теплое время года.',
    date: '12 июня 2024',
    img: './images/news/1mrW_I3kECk.jpg',
  },
  {
    title: 'Летнее обновление меню в ресторане SIXTY FOUR',
    desc: 'Бренд-шеф Владислав Савельев, следуя принципу сезонности, добавил в меню блюда с ингредиентами, которые доступны только в теплое время года.',
    date: '13 июня 2024',
    img: './images/news/1mrW_I3kECk.jpg',
  },
  {
    title: 'Летнее обновление меню в ресторане SIXTY FOUR',
    desc: 'Бренд-шеф Владислав Савельев, следуя принципу сезонности, добавил в меню блюда с ингредиентами, которые доступны только в теплое время года.',
    date: '14 июня 2024',
    img: './images/news/1mrW_I3kECk.jpg',
  },
  {
    title: 'Летнее обновление меню в ресторане SIXTY FOUR',
    desc: 'Бренд-шеф Владислав Савельев, следуя принципу сезонности, добавил в меню блюда с ингредиентами, которые доступны только в теплое время года.',
    date: '15 июня 2024',
    img: './images/news/1mrW_I3kECk.jpg',
  },
];

export default function News() {
  return (
    <>
      <div className='news__container'>
        {news.toReversed().map(item => (
          <NewsItem
            title={item.title}
            date={item.date}
            desc={item.desc}
            img={item.img}
          ></NewsItem>
        ))}
      </div>
    </>
  );
}
