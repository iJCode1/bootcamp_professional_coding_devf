import React from 'react'
import ReactDOM from 'react-dom/client'
import CharacterDetail from './Components/CharacterDetail';
import Welcome from './Components/Welcome.jsx';
import App from './App'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="/home" />} />
        <Route path='/home' element={<App/>} />
        <Route path='/list' element={<Welcome/>}/>
        <Route path='/character/:id' element={<CharacterDetail/>} />
        <Route eaxct path='*' element={<h3>Error 404</h3>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
