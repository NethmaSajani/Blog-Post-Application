import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CreateBlog from "./components/CreateBlog";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/add" element={<CreateBlog />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
