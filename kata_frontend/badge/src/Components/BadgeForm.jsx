import React from 'react';
class BadgeForm extends React.Component{
  render(){
    return(
      <div className='badgeForm'>
        <h1>Crear Card</h1>
        <form className='bForm'>
        <div className='form-group'>
          <label className='badge-label'>Primer Nombre:
            <input onChange={this.props.handleChangle} type="text" className='form-control' name="firstName" placeholder='Joel'/>
          </label>
        </div>
        <div className='form-group'>
          <label className='badge-label'>Apellido:
            <input onChange={this.props.handleChangle} type="text" className='form-control' name="lastName" placeholder='DoMe'/>
          </label>
        </div>
        <div className="form-group">
          <label className='badge-label'>Job:
            <input onChange={this.props.handleChangle} type="text" className='form-control' name="job" placeholder='UX/UI Designer' />
          </label>
        </div>
        <div className='form-group'>
          <label className='badge-label'>Username:
            <input onChange={this.props.handleChangle} type="text" className='form-control' name='username' placeholder='iJCode1' />
          </label>
        </div>
        <button className='btn btn-block btn-primary' type='submit'>Enviar</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm;