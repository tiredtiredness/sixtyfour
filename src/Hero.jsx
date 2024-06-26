import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './Hero.css';
import ReserveForm from './ReserveForm';

export default function Content() {
  return (
    <div className='hero'>
      <p>
        Ресторан европейской кухни с панорамным видом на исторический центр
        Петербурга. Насладитесь гастрономическим уютом с нами!
      </p>
      <button className='phone-btn'>
        <a href='tel:+79110006400' className='phone-btn__link'>
          📞
        </a>
      </button>
      <div>
        <img src='src/images/0twGg6fJZjo.jpg' alt='' />
        <img src='src/images/jRYorlyOFWA.jpg' alt='' />
        <img src='src/images/n0ak-x1AEew.jpg' alt='' />
        <img src='src/images/s_9FJKtDRak.jpg' alt='' />
      </div>
      <ReserveForm></ReserveForm>
    </div>
  );
}
