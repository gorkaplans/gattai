import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Galeria from './pages/Galeria';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
    <div className='bg-beige-gattai'>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Galeria" element={<Galeria />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </div>
    </>
  );
}

export default App;

