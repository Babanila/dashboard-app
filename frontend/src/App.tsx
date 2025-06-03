import { BrowserRouter, Routes, Route } from 'react-router';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Dashboard from '@/pages/Dashboard';
import Products from '@/pages/Products';
import Product from '@/pages/Product';
import './App.css';

function App() {
  return (
    <div className="relative h-full w-full min-w-[20rem] max-w-[80rem] flex flex-col items-center">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
