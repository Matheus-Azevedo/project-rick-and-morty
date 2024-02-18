import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/characters' element={<div>Not Found</div>}></Route>
        <Route path='/episodes' element={<div>Not Found</div>}></Route>
        <Route path='/locations' element={<div>Not Found</div>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
