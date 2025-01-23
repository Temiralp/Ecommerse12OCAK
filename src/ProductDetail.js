import React from 'react';
import { useContext, useState } from 'react';
import { PaymentContext } from './PaymentContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
import { useLocation } from 'react-router';
function ProductDetail(props) {
  const location = useLocation();
  const data = location.state; // Link'ten gelen data
  return (
    <div>
      <h1>
        {' '}
        Burası ürün detay sayfası detayına bakılmak istenen ürünün detayını
        bastıracak
      </h1>
      <p> {data.title}</p>
    </div>
  );
}
export default ProductDetail;
