import Hero from './Hero';
import Contacts from './Contacts';
import About from './About';
import ReserveForm from './ReserveForm';
import NotFound from './NotFound';
import { Routes, Route } from 'react-router-dom';
import './index.css';

export default function Content() {
  return (
    <>
      <main className='main'>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/reserve' element={<ReserveForm />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </main>
    </>
  );
}
