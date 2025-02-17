import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Home from './pages/Home';
import Search from './pages/Search';
import Category from './pages/Category'
import BookDetail from './pages/BookDetail';

function App() {
  return (
    <Router>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Routes>
    </Router>
  );
}

export default App;
