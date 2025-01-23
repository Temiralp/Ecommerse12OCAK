import React from 'react';
import { useContext, useState } from 'react';
import { PaymentContext } from './PaymentContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
function AdressPage() {
  const { adress, setAdress } = useContext(PaymentContext);
  const [temp, setTemp] = useState();
  function AdresEkle(e) {
    setAdress(e.target.value);
  }
  return (
    <div>
      <h1> Burası adress sayfası </h1>
      {adress.map(function (data) {
        return <p> {data}</p>;
      })}
      <form>
        <input
          onChange={function (e) {
            setTemp(e.target.value);
          }}
          type="text"
        />

        <button
          onClick={function (e) {
            e.preventDefault(); // Formun varsayılan yenileme davranışını engeller
            setAdress((prevAdress) => [...prevAdress, temp]); // Yeni adresi mevcut listeye ekler
          }}
          type="submit"
        >
          Ekle{' '}
        </button>
      </form>
      <Link to="/shipping">
        <button> Next </button>
      </Link>
    </div>
  );
}
export default AdressPage;
