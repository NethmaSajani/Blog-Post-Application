import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CreateBlog from "./components/CreateBlog";
import AllBlogs from "./components/AllBlogs";

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route exact path="/add" element={<CreateBlog />}></Route>
        <Route path="/" element={<AllBlogs />}></Route>
      </Routes>

 
    </BrowserRouter>
  );
}

export default App;
