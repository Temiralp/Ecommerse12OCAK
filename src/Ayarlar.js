import React, { useContext } from 'react';
import TemaContext from './TemaContext';
import DilContext from './DilContext';

function Ayarlar() {
  const { tema, setTema } = useContext(TemaContext);
  const { dil, setDil } = useContext(DilContext);
  function temayiDegistir() {
    setTema(tema === 'acik' ? 'koyu' : 'acik');
  }
  function diliDegistir() {
    setDil(dil === 'tr' ? 'en' : 'tr');
  }
  return (
    <div>
      <button onClick={temayiDegistir}> Tema değiştir </button>
      <button onClick={diliDegistir}> Dili değiştir </button>
      <p> Şu anki dil: {dil === 'tr' ? 'Türkçe' : 'İngilizce'} </p>
    </div>
  );
}
export default Ayarlar;
