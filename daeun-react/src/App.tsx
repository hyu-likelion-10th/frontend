import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";
import PostDetail from "./pages/PostDetail";
import Contact from "./pages/Contact";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/create" element={<CreatePost updateMode={false} />} />
        <Route path="/detail/:id" element={<PostDetail />} />
        <Route path="/edit/:id" element={<CreatePost updateMode={true} />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
  );
}

export default App;
