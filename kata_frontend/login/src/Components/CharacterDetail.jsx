import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const CharacterDetail = ({ id }) => {
  const [infoCharacter, setInfoCharacter] = useState({});

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`https://swapi.dev/api/people/${params.id}`);
        setInfoCharacter(data);
      } catch (e) {
        console.error(e);
      }
    })()
  }, [params.id])

  // const location = useLocation();
  // const navigate = useNavigate();
  // const params = useParams();

  return (
    <div className='container mt-5'>
      <h3>Información detallada del personaje</h3>
      <div>
        <ul>
          <b>Nombre: {infoCharacter.name}</b>
          {infoCharacter?.films?.length > 0 ? infoCharacter.films.map((value, index) => {
            return (
              <li key={index}>Film {index + 1} - {value}</li>
              )
            }) : <b>Este personaje no tiene peliculas 😕</b>
          }
        </ul>
      </div>
      {/* <Link to={"/home"} className="btn btn-block w-100 mt-4 btn-primary">Atras</Link> */}
      <button onClick={() => navigate(-1)} className="btn btn-block w-100 mt-4 btn-primary">Atras</button>
    </div>
  )
}

export default CharacterDetail