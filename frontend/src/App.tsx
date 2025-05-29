import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Customer from './pages/Customer';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Product from './pages/Product';
import './App.css';

function App() {
  return (
    <div className="relative h-screen w-full min-w-[20rem] max-w-[80rem] flex flex-col items-center">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
