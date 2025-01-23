import React from 'react';
import React, { useContext, useState, useEffect } from 'react';
import './style.css';
import ProductList from './ProductList.js';
import { ProductProvider } from './ProductContext';
import { CardContext, CardProvider } from './CardContext.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
import Sepet from './Sepet';
import AdressPage from './AdressPage';
import ShippingPage from './ShippingPage';
import { PaymentProvider } from './PaymentContext';
import PaymentPage from './PaymentPage';
import HomePage from './HomePage';
import ProductDetail from './ProductDetail';
export default function App() {
  return (
    <div>
      <CardProvider>
        <ProductProvider>
          <PaymentProvider>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} /> {/* Ana sayfa */}
                <Route path="/detay" element={<ProductDetail />} />{' '}
                {/* Ana sayfa */}
                <Route path="/products" element={<ProductList />} />{' '}
                {/* Ana sayfa */}
                <Route path="/sepet" element={<Sepet />} />{' '}
                <Route path="/shipping" element={<ShippingPage />} />{' '}
                <Route path="/payment" element={<PaymentPage />} />{' '}
                {/* Sepet sayfası */}
                <Route path="/adress" element={<AdressPage />} />{' '}
                {/* Sepet sayfası */}
              </Routes>
            </Router>
          </PaymentProvider>
        </ProductProvider>
      </CardProvider>
    </div>
  );
}
