import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './Welcome';

const Login = () => {
  /**
   * Constantes de Usuario y Contraseña para validar ingreso
   */
  const user = 'usuarioG16';
  const pass = 'passw0rd';

  /**
   * Estados del componente
   */
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [login, setLogin] = useState(false);

  /**
   * Leer valor del input de Username y Password del formulario
   */
  const readUsername = (e) => setUsername(e.target.value.trim());
  const readPassword = (e) => setPassword(e.target.value.trim());

  /**
   * Validar el ingreso de un usuario
   */
  const validate = (e) => {
    e.preventDefault();

    if ((username === user) && (password === pass)) {
      clearStates();
      setError(false);
      setLoginStatus(true);
    } else {
      setError(true);
    }
  }

  /**
   * Cambiar el valor del login
   */
  const setLoginStatus = (status) => {
    setLogin(status);
  }

  /**
   * Limpiar los estados de UserName y Password
   */
  const clearStates = () => {
    setUsername('');
    setPassword('');
  }

  return (
    <>
      {(login)
        ? <Welcome setLoginStatus={setLoginStatus} />
        : <div className='login'>
          <div className="container">
            <h2 className='text-center mb-4'>Inicio de Sesión 😉</h2>
            <form method='POST' className='login_form d-flex flex-column' onSubmit={e => validate(e)}>
              <label className="login_username">
                Nombre de usuario:
                <input onChange={readUsername} name='username' id='username' className='login_input d-block w-100 mt-1 mb-2' type="text" required value={username} />
              </label>
              <label className="login_password">
                Contraseña:
                <input onChange={readPassword} name='password' id='password' className='login_input d-block w-100 mt-1 mb-4' type="password" required value={password} />
              </label>
              {(error)
                ? <div className="alert alert-danger" role="alert">
                  Verifica tus credenciales
                </div>
                : ''}
              <button type="submit" className='btn btn-block btn-primary'>Ingresar</button>
            </form>
          </div>
        </div>
      }
    </>
  )
}

export default Login