import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import Formulario from './components/Formulario';

function App() {

  //definir el state

  const [busquedaLetra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState('');

  useEffect(() => {
   if(Object.keys(busquedaLetra).length === 0) return;

   const consultarAPILetra = async ()=> {
      const {artista, cancion} = busquedaLetra;
      const URL =`https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const resultado = await axios.get(URL)

      guardarLetra(resultado.data.lyrics);
    }
   consultarAPILetra();
  }, [busquedaLetra])


  return (
    <Fragment>
      <Formulario 
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
    </Fragment>
  );
}

export default App;
