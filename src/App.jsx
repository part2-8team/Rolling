import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path="list">
            <Route index element={<List />} />
          </Route>
          <Route path="post">
            <Route index element={<PostPage />} />
            <Route path=":id">
              <Route index element={<PostId />} />
              <Route path="message" element={<PostIdMessage />} />
              <Route path="edit">
                <Route index element={<PostIdEdit />} />
                <Route path=":messageid" element={<MessageEdit />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
