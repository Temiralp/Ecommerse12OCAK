import React, { createContext, useState } from 'react';
// ProductContext oluşturuluyor. Uygulama genelinde ürünlere erişmek için kullanacağız.
export const ProductContext = createContext();
// Provider bileşeni tanımlıyoruz. Bu bileşen, uygulamayı context ile sarmalayacak.
export function ProductProvider(props) {
  // Ürünlerin tutulacağı state tanımlandı.
  const [products, setProducts] = useState([]);

  // Provider'ın value'su, ürünleri ve ürünleri güncelleme fonksiyonunu içerir.
  return (
    <ProductContext.Provider
      value={{ products: products, setProducts: setProducts }}
    >
      {props.children} {/* Tüm alt bileşenler bu context'e erişebilir */}
    </ProductContext.Provider>
  );
}
