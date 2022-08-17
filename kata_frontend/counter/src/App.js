import React, { useState } from 'react';

const App = (props) => {
  const [count, setCount] = useState(0);

  const suma = () => {
    console.log('suma');
    setCount(count + 1);
  }

  const resta = () => {
    console.log('resta');
    setCount(count - 1);
  }

  const reset = () => {
    console.log('reset');
    setCount(0);
  }

  return (
    <>
      <h1>Hola Con Funcional 👀</h1>
      <p>Parrafo con funcional</p>
      <h3>Haz clickeado {count}</h3>
      <button onClick={suma}>Click para aumentar</button>
      <button onClick={resta}>Click para disminuir</button>
      <button onClick={reset}>Click para resetear</button>
    </>
  );
}

export default App;