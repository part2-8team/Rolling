import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import MainPage from './pages/MainPage';
import ListPage from './pages/ListPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path="list" element={<ListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
