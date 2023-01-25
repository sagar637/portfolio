
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './components/home';
import Navbar from './components/navbar';
import Aboutme from './components/pages/aboutme';
import Works from './components/pages/works';
import Skills from './components/pages/skills';



function App() {
  return (
    <Routes>
      <Route path="/" element={<> <Navbar /> <Home /> </>} />
      <Route path="/about" element={<> <Navbar /> < Aboutme /> </>} />
      <Route path="/works" element={<> <Navbar /> <Works /> </>} />
      <Route path="/skills" element={<> <Navbar /> <Skills /> </>} />
    </Routes>



  );
}

export default App;