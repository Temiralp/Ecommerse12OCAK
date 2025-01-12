import React from 'react';
import './style.css';
import React, { useState } from 'react';
import TemaContext from './TemaContext';
import DilContext from './DilContext';
import Ayarlar from './Ayarlar';

export default function App() {
  const [tema, setTema] = useState('acik');
  const [dil, setDil] = useState('tr');
  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      <DilContext.Provider value={{ dil, setDil }}>
        <div
          style={{
            padding: '20px',
            background: tema === 'acik' ? '#fff' : '#333',
            color: tema === 'acik' ? '#000' : '#fff',
          }}
        >
          <h1>Dil ve Tema Ayarları</h1>
          <Ayarlar />
        </div>
      </DilContext.Provider>
    </TemaContext.Provider>
  );
}
