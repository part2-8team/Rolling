import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import MainPage from './pages/MainPage';
import ListPage from './pages/ListPage';
import Post from './pages/Post';
// import PostId from './pages/PostId';
// import PostIdEdit from './pages/PostIdEdit';
import PostIdMessage from './pages/PostIdMessage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="list" element={<ListPage />} />
        {/* UI 처리를 위해 잠시 사용 */}
        <Route path="message" element={<PostIdMessage />} />
        <Route path="post" element={<Post />}>
          {/* <Route index element={<PostId />} />
          <Route path=":id">
            <Route index element={<PostId />} />
            <Route path="message" element={<PostIdMessage />} />
            <Route path="edit" element={<PostIdEdit />} />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
