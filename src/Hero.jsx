import './Hero.css';

export default function Content() {
  return (
    <div className='hero'>
      <p className='hero__desc'>
        Ресторан европейской кухни с панорамным видом на исторический центр
        Петербурга. Насладитесь гастрономическим уютом с нами!
      </p>
      <button className='phone-btn'>
        <a href='tel:+79110006400' className='phone-btn__link'>
          📞
        </a>
      </button>
      <div>
        <img className='hero__img' src='/images/w0n5bArwFRs.jpg' alt='' />
      </div>
    </div>
  );
}
