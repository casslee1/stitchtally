import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Counter from './Counter';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App
