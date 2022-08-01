import React from 'react';
import ReactDOM from 'react-dom';
import './global.css'
import Header from './components/Header';
import Routes from './routes';

ReactDOM.render(
    <>
      <Header/>
      <Routes />
    </>,
  document.getElementById('root')
);
