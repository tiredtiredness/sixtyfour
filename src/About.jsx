import './About.css';

export default function About() {
  return (
    <>
      <div className='about'>
        <section className='about__section'>
          <div className='section__wrapper'>
            <h2 className='section__title'>Наша атмосфера и сервис</h2>
            <p className='section__desc'>
              Наши большие окна в пол и уютное пространство давно стали
              неотъемлемой частью культурных символов набережной Мойки. Сервис
              ресторана Sixty Four — это искусство угадывать желания гостей и
              делать всё возможное для их комфорта. В Sixty Four особое внимание
              уделяют деталям и комфорту гостей, что делает его идеальным местом
              для романтического ужина, деловой встречи или празднования
              значимого события. В тёплую погоду мы открываем окна настежь,
              чтобы вы могли любоваться Мойкой и прекрасными старинными зданиями
              вокруг.
            </p>
          </div>
          <div className='section__wrapper'>
            <img
              src='src/images/s_9FJKtDRak.jpg'
              alt=''
              className='section__img'
            />
          </div>
        </section>
        <section className='about__section'>
          <div className='section__wrapper'>
            <h2 className='section__title'>Расположение</h2>
            <p className='section__desc'>
              Sixty Four — ресторан о неразрывной связи с Петербургом. Из наших
              панорамных окон открывается вид на набережную реки Мойки и
              универмаг Au Pont Rouge. В двух шагах от Sixty Four — Исаакиевская
              площадь и Мариинский дворец. Здесь случаются незабываемые свидания
              с городом.
            </p>
          </div>

          <div className='section__wrapper'>
            <video className='section__video' autoPlay='autoplay' loop muted>
              <source src='src/images/video_8IfhNil.mp4' />
            </video>
          </div>
        </section>
        <section className='about__section'>
          <div className='section__wrapper'>
            <h2 className='section__title'>Меню ресторана</h2>
            <p className='section__desc'>
              Вся палитра европейских вкусов в новом меню Sixty Four! Наш новый
              шеф-повар Владислав Савельев сделал упор на традиционные блюда и
              богатство деликатесов. Италия: вителло тоннато с чёрным трюфелем,
              сицилийское аранчини с крабом, шесть вариантов паст, ризотто аль
              помодоро и равиоли с лососем и апельсином. Луковый суп с фуа-гра —
              по французским мотивам, осьминог с нутом — в стиле
              средиземноморской кухни.
            </p>
          </div>

          <div className='section__wrapper'>
            <img
              src='src/images/0twGg6fJZjo.jpg'
              alt=''
              className='section__img'
            />
          </div>
        </section>
        <section className='about__section'>
          <div className='section__wrapper'>
            <h2 className='section__title'>Бар</h2>
            <p className='section__desc'>
              Мы обновили барную карту, в которой весенние ноты объединились с
              яркими вкусами. Вина, домашние настойки, коктейли, лимонады и
              авторские чаи — всё, чтобы итальянские, французские и
              средиземноморские блюда из нового меню открыли интересные грани.
              Ценители изысканных напитков найдут великолепный выбор
              шампанского, включая такие легендарные марки, как Krug и Cristal.
              Шампанское Krug, известное своим сложным и богатым вкусом,
              идеально подходит для особых случаев и торжественных мероприятий.
              Cristal, созданный Домом Louis Roederer, славится своей
              элегантностью и изысканностью, обладая нотками цитрусовых и белых
              цветов.
            </p>
          </div>

          <div className='section__wrapper'>
            <img
              src='src/images/iAxHMm2gaYg.jpg'
              alt=''
              className='section__img'
            />
          </div>
        </section>
        <section className='about__section'>
          <div className='section__wrapper'>
            <h2 className='section__title'>Мероприятия и банкеты</h2>
            <p className='section__desc'>
              Здесь проводят дни рождения, корпоративы и свадьбы. Каждый банкет
              планируется индивидуально. Мы предлагаем идеальные условия для
              проведения банкетов любого масштаба! Изящный интерьер,
              превосходное обслуживание и изысканное меню европейской кухни
              создают неповторимую атмосферу для вашего торжества. Команда
              профессионалов ресторана поможет в организации мероприятия,
              учитывая все ваши пожелания, чтобы каждый гость остался доволен.
              Каждый банкет становится незабываемым событием!
            </p>
          </div>

          <div className='section__wrapper'>
            <img
              src='src/images/n0ak-x1AEew.jpg'
              alt=''
              className='section__img'
            />
          </div>
        </section>
        <section className='about__section'>
          <div className='section__wrapper'>
            <h2 className='section__title'>Кейтеринг</h2>
            <p className='section__desc'>
              Закажите кейтеринг на яхту или катер, чтобы украсить водную
              прогулку гастрономическими впечатлениями. Наш ресторан славится
              своим безупречным сервисом и истинным петербургским
              гостеприимством! Особое внимание уделяется деталям: от безупречной
              сервировки до теплого приема. В Sixty Four каждый гость чувствует
              себя особенным, наслаждаясь не только изысканной кухней, но и
              высочайшим уровнем обслуживания.
            </p>
          </div>

          <div className='section__wrapper'>
            <img
              src='src/images/MbSmfRsAZC0.jpg'
              alt=''
              className='section__img'
            />
          </div>
        </section>
      </div>
    </>
  );
}
