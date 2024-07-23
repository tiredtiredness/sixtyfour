import Hero from './Hero';
import Contacts from './Contacts';
import About from './About';
import ReserveForm from './ReserveForm';
import News from './News';
import NotFound from './NotFound';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import './Content.css';

export default function Content() {
  return (
    <>
    <div className="intro">
      <div className="intro__left-side"></div>
      <div className="intro__right-side"></div>
    </div>
      <div id='background_wrap'></div>
      <main className='main'>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/reserve' element={<ReserveForm />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </main>
    </>
  );
}
