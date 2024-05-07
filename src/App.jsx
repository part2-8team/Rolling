import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import MainPage from './pages/MainPage';
import ListPage from './pages/ListPage';
import UserFormPage from './pages/UserFormPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path="list" element={<ListPage />} />
        </Route>
        <Route path="/post" element={<UserFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
