import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Counter from './Counter';
import UserActive from './UserActive';

function App() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(22);
  const [isActive, setIsActive] = useState(true);

  const showGreeting = (age) => {
    const message = (age >= 18) ? <span>Hola, eres mayor de edad 😎</span> : <span>No eres mayor de edad 😕</span>;
    return message;
  };

  const h1ActiveStyles = {border: '3px solid purple', fontSize: '2rem'};
  const h1InactiveStyles = {border: '3px solid #000', fontSize: '2rem'};

  return (
    <div className="App">
      <h1 className={ isActive ? 'title_active' : 'title_inactive' }>Vite + React</h1>
      <div className="card" style={ isActive ? h1ActiveStyles : h1InactiveStyles }>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* JSX */}
      {showGreeting(22)}

      {/* Conditional Rendering */}
      {/* Si solo hay un if, se usa && */}
      {count >= 0 &&
        (
          <Counter/>
        )
      }

      {/* Si hay un else-if, se usa operador ternario */}
      { isActive ? <UserActive/> : <h3>Usuario no activo</h3>}

      {/* Si se requiere, se puede anidar un ternario dentro de otro ternario */}
      { age >= 18 ? (
        <strong>Eres mayor de edad</strong>
        ) : age < 18 && age >= 12 ? (
        <b>Eres un adolescente</b> 
        ) : (
        <h5>Eres un niño</h5>)
      }
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
