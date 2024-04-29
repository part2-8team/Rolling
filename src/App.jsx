import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Main from './pages/Main';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;