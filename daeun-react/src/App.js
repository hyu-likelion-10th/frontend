import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";
import ReadPost from "./pages/ReadPost";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/detail" element={<ReadPost />} />
      <Route path="/contact" element={<Contact />} />
      
    </Routes>
  );
}

export default App;
