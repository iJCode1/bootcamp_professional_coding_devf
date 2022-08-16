import React from 'react';
import "../styles/Navbar.css";

class Navbar extends React.Component{
  render(){
    return (
      <div className='Navbar'>
        <div className='container-fluid'>
          <div>
            <span className='navbar-link font-weight-light'>DevF</span>
            <span className='navbar-link font-weight-bold'>Online</span>
          </div>
        </div>
      </div>  
    );
  }
}

export default Navbar;