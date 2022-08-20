import React from 'react';
import './Welcome.css';

const Welcome = ( { setLoginStatus } ) => {

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
        <form onSubmit={ () => setLoginStatus(false) }>
          <button type='submit' className='btn btn-block btn-danger'>Cerrar Sesion</button>
        </form>
      </div>
    </>
  )
}

export default Welcome;