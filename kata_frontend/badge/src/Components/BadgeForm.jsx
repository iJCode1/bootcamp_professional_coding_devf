import React from 'react';
class BadgeForm extends React.Component{
  render(){
    return(
      <div>
        <h1>Crear Card</h1>
        <form>
        <div className='form-group'>
          <label>Primer Nombre:
            <input onChange={this.props.handleChangle} type="text" className='form-control' name="firstName" placeholder='Joel'/>
          </label>
        </div>
        <div className='form-group'>
          <label>Apellido:
            <input onChange={this.props.handleChangle} type="text" className='form-control' name="lastName" placeholder='DoMe'/>
          </label>
        </div>
        <button type='submit'>Enviar</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm;