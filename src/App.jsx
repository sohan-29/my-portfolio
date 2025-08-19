import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/home';
import AboutMe from './components/about';
import Skills from './components/skills';

function App() {

  return (
    <BrowserRouter basename='/my-portfolio'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
