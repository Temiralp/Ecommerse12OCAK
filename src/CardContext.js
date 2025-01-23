import React, { createContext, useState } from 'react';
export const CardContext = createContext();
// Provider bileşeni tanımlıyoruz. Bu bileşen, uygulamayı context ile sarmalayacak.
export function CardProvider(props) {
  const [sepetproducts, setSepetProducts] = useState([]);

  // Provider'ın value'su, ürünleri ve ürünleri güncelleme fonksiyonunu içerir.
  return (
    <CardContext.Provider
      value={{
        sepetproducts: sepetproducts,
        setSepetProducts: setSepetProducts,
      }}
    >
      {props.children} {/*Tüm komponentler bu context e erişebilir */}
    </CardContext.Provider>
  );
}
