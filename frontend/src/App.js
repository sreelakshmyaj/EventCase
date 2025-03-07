import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Regiser';
import ClientDashboard from './pages/ClientDashboard';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<ClientDashboard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard/*' element={<ClientDashboard />} />
      </Routes>
    </Router>
  )
}

export default App;
