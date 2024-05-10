import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import MainPage from './pages/MainPage';
import ListPage from './pages/ListPage';
import Post from './pages/Post';
import PostId from './pages/PostId';
// import PostIdEdit from "./pages/PostIdEdit";
// import PostIdMessage from "./pages/PostIdMessage";
import styled from 'styled-components';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<MainPage />} />
            <Route path="list">
              <Route index element={<ListPage />} />
            </Route>
            <Route path="post">
              <Route index element={<Post />} />
              <Route path=":id">
                <Route index element={<PostId />} />
                {/* <Route path="message" element={<PostIdMessage />} />
                <Route path="edit">
                  <Route index element={<PostIdEdit />} />
                  <Route path=":messageid" element={<MessageEdit />} />
                </Route> */}
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
