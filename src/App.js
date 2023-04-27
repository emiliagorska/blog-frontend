import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Post from "./components/Post";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/blog/:id" element={<Post />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
