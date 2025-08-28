import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/home';
import AboutMe from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {

  return (
    <BrowserRouter basename='/my-portfolio'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
