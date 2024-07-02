import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import { BrowserRouter} from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>
);
