import React from 'react';
import { useContext, useState } from 'react';
import { PaymentContext } from './PaymentContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
function HomePage() {
  return (
    <div>
      <h1> Burası anasayfa </h1>
      <Link to="./products">
        <button> Urunler </button>
      </Link>
    </div>
  );
}
export default HomePage;
