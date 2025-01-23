import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { ProductContext } from './ProductContext.js';
import { CardContext, CardProvider } from './CardContext.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
import ProductDetail from './ProductDetail';
import Sepet from './Sepet';
import './style.css';

function ProductList() {
  const { products, setProducts } = useContext(ProductContext);
  const { sepetproducts, setSepetProducts } = useContext(CardContext);
  useEffect(function () {
    fetch('https://fakestoreapi.com/products')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setProducts(data);
      });
  }, []);
  function sepeteEkle(data) {
    setSepetProducts(function (prev) {
      return [...prev, data];
    });
  }

  useEffect(() => {
    console.log('Güncellenmiş sepet:', sepetproducts);
  }, [sepetproducts]); // sepetProducts her güncellendiğinde çalışır
  return (
    <div>
      <Link to="/sepet">
        <button>Sepet</button>
      </Link>
      {products.map(function (data) {
        return (
          <div className="card">
            <p> {data.title} </p>
            <img src={data.image} />
            <button
              onClick={function () {
                sepeteEkle(data);
              }}
            >
              {' '}
              Buy now{' '}
            </button>
            <Link to="/detay" state={data}>
              <button> Detay</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default ProductList;
