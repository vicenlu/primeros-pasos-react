import './App.css';
import { useState, useEffect } from 'react';
import Child from './components/Child'
import Child2 from './components/Child2'

function App() {

  /* LÓGICA */

  /* 1. useState */
  const [count, setCount] = useState(0);

  /* 2. useEffect */
  useEffect(() => {
    setCount(22222)
  }, []);

  const changeCount = (event) => {
    setCount(event.target.value)
  }

  return (
    <div className="App">
      <br />
      <br />
      1. LEER VALOR DEL ESTADO: { count }
      <br />
      <br />
      2. MODIFICAR ESTADO:
      <br />
      <br />
      <button value="cambiado por el padre" onClick={changeCount}>Cambiar estado con botón en JSX del padre</button>
      <br />
      <br />
      3. USAR COMPONENTE HIJO:
      <Child name="Luis" name2="Vicente" cambiarContador={changeCount}></Child>
      <br />
      <br />
      4. PASAR ESTADO DEL PADRE A OTRO COMPONENTE:
      <Child2 contador={count}></Child2>
    </div>
  );
}

export default App;
