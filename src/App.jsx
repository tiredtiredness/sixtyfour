import { useState } from 'react';
import Header from './Header.jsx';
import Content from './Hero.jsx';
import Footer from './Footer.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </>
  );
}

export default App;
