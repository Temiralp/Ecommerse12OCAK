import { createContext, useState } from 'react';
import React from 'react';

export const PaymentContext = createContext();
export function PaymentProvider(props) {
  const [adress, setAdress] = useState([]);

  return (
    <PaymentContext.Provider value={{ adress: adress, setAdress: setAdress }}>
      {props.children};
    </PaymentContext.Provider>
  );
}
