import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav"; 
import Home from "./pages/Home";
import Search from "./pages/Search";
import Category from "./pages/Category";
import BookDetail from "./pages/BookDetail";
import About from "./pages/About";

function App() {
  console.log(`veikia`)
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/category" element={<Category />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
