import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';

import { MainPage } from './pages/main';
import { TermsOfUse } from './pages/terms';
import { OfferAgreement } from './pages/offer';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/terms' element={<TermsOfUse />} />
        <Route path='/offer' element={<OfferAgreement />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
