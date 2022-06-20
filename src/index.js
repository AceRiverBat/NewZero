import React from 'react';
import ReactDOM from 'react-dom/client';
import Accueil from './pages/Accueil';
import './index.css';
import Map from './pages/Map';
import Blog from './pages/Blog';
import Lyon1 from './pages/arrondissements/Lyon1';
import Lyon2 from './pages/arrondissements/Lyon2';
import Lyon3 from './pages/arrondissements/Lyon3';
import Lyon4 from './pages/arrondissements/Lyon4';
import Lyon5 from './pages/arrondissements/Lyon5';
import Lyon6 from './pages/arrondissements/Lyon6';
import Lyon7 from './pages/arrondissements/Lyon7';
import Lyon8 from './pages/arrondissements/Lyon8';
import Lyon9 from './pages/arrondissements/Lyon9';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="map" element={<Map />} />
      <Route path="blog" element={<Blog />} />
      <Route path="Lyon1" element={<Lyon1 />} />
      <Route path="Lyon2" element={<Lyon2 />} />
      <Route path="Lyon3" element={<Lyon3 />} />
      <Route path="Lyon4" element={<Lyon4 />} />
      <Route path="Lyon5" element={<Lyon5 />} />
      <Route path="Lyon6" element={<Lyon6 />} />
      <Route path="Lyon7" element={<Lyon7 />} />
      <Route path="Lyon8" element={<Lyon8 />} />
      <Route path="Lyon9" element={<Lyon9 />} />
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
