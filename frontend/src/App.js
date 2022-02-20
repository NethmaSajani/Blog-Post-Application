import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CreateBlog from "./components/CreateBlog";
import AllBlogs from "./components/AllBlogs";
import UpdateBlog from "./components/UpdateBlog";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/add" element={<CreateBlog />}></Route>
        <Route path="/update" element={<UpdateBlog/>}></Route>
        <Route exact path="/" element={<AllBlogs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
