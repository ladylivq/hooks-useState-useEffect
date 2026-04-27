//* HOOKS
//? hooks useState: Permite agregar estado a los componentes funcionales. Devuelve un par de valores: el estado actual y una funcion para actualizarlo.
//* Sintaxis:
//* const [estadoInicial,setEstadoActualizado] = useState(valorInicial);

//* Example 1: Escribir un componente que muestre un contador y un boton para incrementarlo.
/*
import {useState} from 'react';
const MyApp = () => {
  const [count, setCount] = useState(0); 

  return (
    <div>
      <h1> CLICK: {count} </h1>
      <button onClick = { () => setCount(count + 1)}>CLICK ME</button>
    </div>
  );
}

export default MyApp;
*/
//* Example 2: Escribir uncomponente que permita al usuario ingresar su nombre y mostrarlo en pantalla.
/*
import {useState} from 'react';

const MyApp = () => {
  const [name, setName] = useState('');
  const handleInputChange = (event) => {
    setName(event.target.value);

  };

  return (
    <div> 
      <h1> Hola, {name} </h1>
      <input type="text" placeholder="Ingresa tu nombre" onChange={handleInputChange} />
    </div>
  )
}

export default MyApp;
*/
//* Hooks useEffect: Permite realizar efectos secundarios en los componentes funcionales, como llamadas a APIs, suscripciones o manipulaciones del DOM. Se ejecuta despues de el componente se ha renderizado.
//* Sintaxis:
/*    
useEffect(() => {
 // Código del efecto secundario
}, [someProp, someState]);

*/

//* Example 1: Escribir un componente que muestre un request a una API despues de que el componente se haya montado.

import {useState, useEffect} from 'react';

const Myapp = () => {
  const [data, setData] = usesState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/2')
      .then(response => response.json())
      .then(json => setData(json));
  },[]);

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>Cargando ...</p>
      )}
    </div>
  );
}

export default Myapp;