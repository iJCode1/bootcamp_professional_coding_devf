// *************** Declaración de variables ***************
const $inputEmail = document.querySelector('#inputEmail');
const $inputPassword = document.querySelector('#inputPassword');
const $inputEmailMessage = document.querySelector('#inputEmailMessage');
const $inputPasswordMessage = document.querySelector('#inputPasswordMessage');
const $buttonEnter = document.querySelector('#buttonEnter');
let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

// *************** Declaración de funciones ***************
const validateAccount = (data, email, pass) =>{
  if(!(emailRegex.test(email))){
    return messageError("El correo electrónico que se ingresó no es válido", $inputEmailMessage);
  }else if(pass.length < 6){
    clearMessageError($inputEmailMessage);
    return messageError("La contraseña debe ser mayor o igual a 6 dígitos", $inputPasswordMessage);
  }else{
    clearMessageError($inputEmailMessage);
    clearMessageError($inputPasswordMessage);
    
    let findEmail = data.filter((el) => el.correo === email);
    if(findEmail.length === 1){
      if( ( findEmail[0].correo === email ) && ( findEmail[0].contraseña === pass ) ){
        // Se almacena en el localStorage la clave 'email' con el valor del correo
        localStorage.setItem('email', `${findEmail[0].correo}`);
        localStorage.setItem('money', `${findEmail[0].saldo}`);
        window.location.href = './cajero.html';
      }else{
        return messageError("La contraseña no coincide con el correo ingresado, verifíquelo por favor", $inputPasswordMessage);
      }
    }else{
      return messageError("Revise el correo ingresado, no se encuentra en la BD", $inputEmailMessage);
    }
  }
}

const messageError = (error, element)=>{
  element.textContent = error;
  element.style.visibility = 'initial';
}

const clearMessageError = (element) =>{
  element.textContent = '';
}

// *************** Declaración de eventos ***************
$buttonEnter.addEventListener('click', (e)=>{
  e.preventDefault();
  let email = $inputEmail.value;
  let pass = $inputPassword.value.trim();
  validateAccount(cuentas, email, pass);
});
