import React from 'react';
import { useContext, useState } from 'react';
import { CardContext } from './CardContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
function Sepet() {
  const { sepetproducts, setSepetProducts } = useContext(CardContext);
  const [totalPrice, setTotalPrice] = useState();
  return (
    <div>
      <p> SEPET SAYFASI Burada sepete eklenen ürünler listlenecek </p>

      {sepetproducts.map(function (data) {
        return (
          <div>
            <img style={{ height: '100px' }} src={data.image} />
          </div>
        );
      })}
      <Link to="/adress">
        <button> Checkout</button>
      </Link>
    </div>
  );
}
export default Sepet;
