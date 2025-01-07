import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import HeroSection from './Components/HeroSection';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import 'remixicon/fonts/remixicon.css';


function App() {
  return (
    <div className="h-full w-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Define individual routes */}
          <Route path="/" element={<HeroSection />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/ContactUs" element={<ContactUs/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
