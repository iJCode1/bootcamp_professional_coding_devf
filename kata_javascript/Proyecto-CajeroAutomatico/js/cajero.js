// *************** Declaración de variables ***************
const d = document;
const $atm_button_zero = d.querySelector('#atm-button-zero');
const $atm_button_one = d.querySelector('#atm-button-one');
const $atm_button_two = d.querySelector('#atm-button-two');
const $atm_button_three = d.querySelector('#atm-button-three');
const $atm_button_four = d.querySelector('#atm-button-four');
const $atm_button_five = d.querySelector('#atm-button-five');
const $atm_button_six = d.querySelector('#atm-button-six');
const $atm_button_seven = d.querySelector('#atm-button-seven');
const $atm_button_eight = d.querySelector('#atm-button-eight');
const $atm_button_nine = d.querySelector('#atm-button-nine');
const $atm_button_accept = d.querySelector('#atm-button-accept');
const $atm_button_delete = d.querySelector('#atm-button-delete');
const $check_balance = d.querySelector('#checkBalance');
const $logout = d.querySelector('#logout');
const $depositMoney = d.querySelector('#depositMoney');
const $withdrawMoney = d.querySelector('#withdrawMoney');
const $atm_screen_paragraph = d.querySelector('#atm-screen-paragraph');
let moneyArray = [];
let userEmail;
let userMoney;
let keyboardIsActive = false;
let isDeposit = false;
let isWithdraw = false;


// *************** Declaración de funciones ***************
const retrieveLocalStorage = (item) => {
  let value = localStorage.getItem(item);
  return value;
}
const showMessage = (message, concat = false) => {
  if (concat === true) {
    if(isDeposit){
      $atm_screen_paragraph.textContent = 'Ingrese la cantidad que desea depositar ... $' + moneyArray.join('');
    }else if(isWithdraw){
      $atm_screen_paragraph.textContent = 'Ingrese la cantidad que desea retirar ... $' + moneyArray.join('');
    }
  } else {
    $atm_screen_paragraph.textContent = message;
  }
}
const checkBalance = () => {
  keyboardIsActive = false;
  moneyArray = [];
  money = retrieveLocalStorage('money');
  return money;
}
const depositMoney = () => {
  moneyArray = [];
  if (moneyArray.length > 0) {
    keyboardIsActive = true;
    showMessage('', true);
  } else {
    showMessage('Ingrese la cantidad que desea depositar ...', false);
    keyboardIsActive = true;
  }
}
const increaseBalance = () => {
  let currentMoney = Number(retrieveLocalStorage('money'));
  let moneyDeposited = Number(moneyArray.join(''));
  let finalBalance = currentMoney + moneyDeposited;
  if (finalBalance <= 990) {
    localStorage.setItem('money', `${finalBalance}`);
    moneyArray = [];
    showMessage(`Tu saldo actual es de: $${finalBalance}`);
  } else {
    showMessage('No puedes tener más de $990 dólares en tu cuenta', false)
  }
}
const withdrawMoney = () => {
  moneyArray = [];
  if (moneyArray.length > 0) {
    keyboardIsActive = true;
    showMessage('', true);
  } else {
    showMessage('Ingrese la cantidad que desea retirar ...', false);
    keyboardIsActive = true;
  }
  // showMessage()
}
const decreaseBalance = () => {
  let currentMoney = Number(retrieveLocalStorage('money'));
  let withdrawnMoney = Number(moneyArray.join(''));
  let finalBalance = currentMoney - withdrawnMoney;
  if(withdrawnMoney >= currentMoney){
    showMessage('No tienes suficiente saldo para retirar ...');
    setTimeout(()=>{
      moneyArray = [];
      showMessage('Ingrese un saldo menor a retirar ...');
      // showMessage('Buen día usuario, seleccione una opción');
    },1000)
  }else if (finalBalance >= 10) {
    localStorage.setItem('money', `${finalBalance}`);
    moneyArray = [];
    showMessage(`Tu saldo actual es de: $${finalBalance}`);
  } else {
    showMessage('No puedes quedarte con menos de $10 dólares en tu cuenta ...', false)
  }
}
const cleanAll = () => {

}
// *************** Declaración de eventos ***************
$atm_button_zero.addEventListener('click', () => {
  if (keyboardIsActive) {
    moneyArray.push('0');
    showMessage('0', true);
  }
});
$atm_button_one.addEventListener('click', () => {
  if (keyboardIsActive) {
    moneyArray.push('1');
    showMessage('1', true);
  }
});
$atm_button_two.addEventListener('click', () => {
  if (keyboardIsActive) {
    moneyArray.push('2');
    showMessage('2', true);
  }
});
$atm_button_three.addEventListener('click', () => {
  if (keyboardIsActive) {
    moneyArray.push('3');
    showMessage('3', true);
  }
});
$atm_button_four.addEventListener('click', () => {
  if (keyboardIsActive) {
    moneyArray.push('4');
    showMessage('4', true);
  }
});
$atm_button_five.addEventListener('click', () => {
  if (keyboardIsActive) {
    moneyArray.push('5');
    showMessage('5', true);
  }
});
$atm_button_six.addEventListener('click', () => {
  if (keyboardIsActive) {
    moneyArray.push('6');
    showMessage('6', true);
  }
});
$atm_button_seven.addEventListener('click', () => {
  if (keyboardIsActive) {
    moneyArray.push('7');
    showMessage('7', true);
  }
});
$atm_button_eight.addEventListener('click', () => {
  if (keyboardIsActive) {
    moneyArray.push('8');
    showMessage('8', true);
  }
});
$atm_button_nine.addEventListener('click', () => {
  if (keyboardIsActive) {
    moneyArray.push('9');
    showMessage('9', true);
  }
});
$atm_button_delete.addEventListener('click', () => {
  if (moneyArray.length > 0) {
    moneyArray.pop();
    showMessage("", true);
  }
});
$atm_button_accept.addEventListener('click', () => {
  if (moneyArray.length > 0) {
    if (isDeposit) {
      increaseBalance();
    } else if (isWithdraw) {
      decreaseBalance();
    }
  }
});

$check_balance.addEventListener('click', () => {
  isDeposit = false;
  isWithdraw = false;
  let balance = checkBalance();
  showMessage(`Tu saldo es de: $${balance}`);
});
$depositMoney.addEventListener('click', () => {
  isDeposit = true;
  isWithdraw = false;
  depositMoney();
});
$withdrawMoney.addEventListener('click', () => {
  isDeposit = false;
  isWithdraw = true;
  withdrawMoney();
});
$logout.addEventListener('click', () => {
  isDeposit = false;
  isWithdraw = false;
  showMessage("Que tenga un buen día 🛡️");
  localStorage.removeItem('money');
  localStorage.removeItem('email');
  setTimeout(() => {
    window.location.href = './index.html';
  }, 2000)
});