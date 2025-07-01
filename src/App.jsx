import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/home';

function App() {

  return (
    <BrowserRouter basename='/my-portfolio'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
