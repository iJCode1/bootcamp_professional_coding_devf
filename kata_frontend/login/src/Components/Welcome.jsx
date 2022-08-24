import React, {useEffect, useState} from 'react';
import CharacterDetail from './CharacterDetail';
import './Welcome.css';
import axios from 'axios';

const Welcome = ( { setLoginStatus } ) => {

  const[charactersAray, setCharactersAray] = useState([]);
  const [characterID, setCharacterID] = useState(0);

  const handleCharacterID = (id) => setCharacterID(id);
  /**
   * Implementar llamada SWAPI cuando se monte el componente, una sola vez
   */
  useEffect(()=>{    
    getStarWarsCharacters();
  }, [])
  
  const getStarWarsCharacters = async() => {
    try{
      const {data: {results} } = await axios.get('https://swapi.dev/api/people');
      setCharactersAray(results);
      console.log('result', results);
    }catch(error){
      console.error('error', error);
    }
  };

  /**
   * Función para crear mensaje del componente con la fecha y hora actual
   */
  const message = () => {
    let date = new Date();
    let today = date.toLocaleString();
    return `Usuario Loggeado éxitosamente el día y hora: ${today}!`;
  }

  return (
    <>
      <div className="container mt-5 d-flex flex-column justify-content-center align-items-center form-container p-3">
        <h2 className='mb-4'>Bienvenido 😎!</h2>
        <p> { message() } </p>

        {
        charactersAray.length === 0 
        ? <h4>Cargando...</h4>
        : charactersAray.map( (character, index) => (
            <p className='select' key={index} onClick={() => handleCharacterID(index+1) }>Nombre del personaje <span className='text-primary'>{character.name} - {character.height}</span></p>
          ))
        }

        {
          characterID > 0 && <CharacterDetail id={characterID}/>
        }

        <form onSubmit={ () => setLoginStatus(false) }>
          <button type='submit' className='btn btn-block btn-danger'>Cerrar Sesion</button>
        </form>
      </div>
    </>
  )
}

export default Welcome;