import React from 'react';
import { useContext, useState } from 'react';
import { PaymentContext } from './PaymentContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
function ShippingPage() {
  return (
    <div>
      <h1> Burası kargo secim sayfası </h1>

      <Link to="/payment">
        <button> Next </button>
      </Link>
    </div>
  );
}
export default ShippingPage;
