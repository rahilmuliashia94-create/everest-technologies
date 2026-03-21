import { Routes, Route } from 'react-router-dom';
import TopBar from './sections/TopBar';
import Navigation from './sections/Navigation';
import Footer from './sections/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Sectors from './pages/Sectors';
import Contact from './pages/Contact';
import Login from './pages/Login';
import ClientDashboard from './pages/ClientDashboard';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <TopBar />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/client" element={<ClientDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
