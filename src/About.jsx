import './About.css';
import 'animate.css';

export default function About() {
  return (
    <>
      <div className='about'>
        <section id='atmosphere' className='about__section'>
          <div className='section__wrapper'>
            <h2 className='section__title'>Атмосфера и сервис</h2>
            <p className='section__desc'>
              Наши большие окна в пол и уютное пространство давно стали
              неотъемлемой частью культурных символов набережной Мойки. Сервис
              ресторана Sixty Four — это искусство угадывать желания гостей и
              делать всё возможное для их комфорта. Особое внимание уделяется
              деталям, что делает его идеальным местом для романтического ужина,
              деловой встречи или празднования значимого события. В тёплую
              погоду мы открываем окна настежь, чтобы вы могли любоваться Мойкой
              и прекрасными старинными зданиями. Пространство ресторана
              оформлено в теплых бежевых тонах с исторической кирпичной кладкой,
              состаренными зеркалами, декоративными панно и брутальными линиями
              труб.
            </p>
            <a href='#location'>
              <img
                src='/images/icons/MaterialSymbolsLightKeyboardArrowDown.svg'
                alt=''
                className='section__scroll-btn'
              />
            </a>
          </div>
          <div className='section__wrapper'>
            <img
              src='/images/about/s_9FJKtDRak.jpg'
              alt=''
              className='section__img'
            />
          </div>
        </section>

        <section id='location' className='about__section'>
          <div className='section__wrapper'>
            <h2 className='section__title'>Расположение</h2>
            <p className='section__desc'>
              Sixty Four — ресторан о неразрывной связи с Петербургом. Из наших
              панорамных окон открывается вид на набережную реки Мойки и
              универмаг Au Pont Rouge. В двух шагах от нас — Исаакиевская
              площадь и Мариинский дворец. Здесь случаются незабываемые свидания
              с городом.
            </p>
            <a href='#menu'>
              <img
                src='/images/icons/MaterialSymbolsLightKeyboardArrowDown.svg'
                alt=''
                className='section__scroll-btn'
              />
            </a>
          </div>
          <div className='section__wrapper'>
            <video
              className='section__video'
              autoPlay='autoplay'
              loop
              muted
              playsInline
            >
              <source src='/images/about/video_8IfhNil.mp4' />
            </video>
          </div>
        </section>

        <section id='menu' className='about__section'>
          <div className='section__wrapper'>
            <h2 className='section__title'>Меню ресторана</h2>
            <p className='section__desc'>
              В новом меню Sixty Four представлена вся палитра европейских
              вкусов! Наш новый шеф-повар Владислав Савельев сделал упор на
              традиционные блюда и богатство деликатесов. Италия: вителло
              тоннато с чёрным трюфелем, сицилийское аранчини с крабом, шесть
              вариантов паст, ризотто аль помодоро и равиоли с лососем и
              апельсином. Луковый суп с фуа-гра — по французским мотивам,
              осьминог с нутом — в стиле средиземноморской кухни.
            </p>
            <a href='#bar'>
              <img
                src='/images/icons/MaterialSymbolsLightKeyboardArrowDown.svg'
                alt=''
                className='section__scroll-btn'
              />
            </a>
          </div>
          <div className='section__wrapper'>
            <img src='/images/food.gif' alt='' className='section__img' />
          </div>
        </section>

        <section id='bar' className='about__section'>
          <div className='section__wrapper'>
            <h2 className='section__title'>Бар</h2>
            <p className='section__desc'>
              Мы обновили барную карту, в которой весенние ноты объединились с
              яркими вкусами. Вина, домашние настойки, коктейли, лимонады и
              авторские чаи — всё, чтобы блюда из нового меню открыли интересные
              грани. Ценители изысканных напитков найдут великолепный выбор
              шампанского, включая такие легендарные марки, как Krug и Cristal.
            </p>
            <a href='#events'>
              <img
                src='/images/icons/MaterialSymbolsLightKeyboardArrowDown.svg'
                alt=''
                className='section__scroll-btn'
              />
            </a>
          </div>
          <div className='section__wrapper'>
            <img
              src='/images/about/iAxHMm2gaYg.jpg'
              alt=''
              className='section__img'
            />
          </div>
        </section>

        <section id='events' className='about__section'>
          <div className='section__wrapper'>
            <h2 className='section__title'>Мероприятия и банкеты</h2>
            <p className='section__desc'>
              Здесь проводят дни рождения, корпоративы и свадьбы. Каждый банкет
              планируется индивидуально.{' '}
              <span className='accent'>
                Мы дарим скидку 15% на всё меню в день рождения, 3 дня до и
                после знаменательной даты.
              </span>{' '}
              Команда профессионалов ресторана поможет в организации
              мероприятия, учитывая все ваши пожелания, чтобы каждый гость
              остался доволен. Каждый банкет становится незабываемым событием!
            </p>
            <a href='#catering'>
              <img
                src='/images/icons/MaterialSymbolsLightKeyboardArrowDown.svg'
                alt=''
                className='section__scroll-btn'
              />
            </a>
          </div>

          <div className='section__wrapper'>
            <img
              src='/images/about/n0ak-x1AEew.jpg'
              alt=''
              className='section__img'
            />
          </div>
        </section>

        <section id='catering' className='about__section'>
          <div className='section__wrapper'>
            <h2 className='section__title'>Кейтеринг</h2>
            <p className='section__desc'>
              Закажите кейтеринг на яхту или катер, чтобы украсить водную
              прогулку гастрономическими впечатлениями. Наши кулинарные шедевры
              создадут атмосферу изысканности и комфорта не только в ресторане,
              но и в любом другом месте. Наслаждайтесь великолепной кухней, будь
              то на воде или на суше, и сделайте ваше событие особенным!
            </p>
            <a href='#'>
              <img
                src='/images/icons/MaterialSymbolsLightKeyboardArrowDown.svg'
                alt=''
                className='section__scroll-btn--last section__scroll-btn '
              />
            </a>
          </div>

          <div className='section__wrapper'>
            <img
              src='/images/about/MbSmfRsAZC0.jpg'
              alt=''
              className='section__img'
            />
          </div>
        </section>
      </div>
    </>
  );
}
