const $main_count = document.querySelector("#main-count");
const $main_add = document.querySelector("#main-add");
const $main_sub = document.querySelector("#main-sub");
const $main_res = document.querySelector("#main-res");
let counter = Number($main_count.textContent);
let initialValue = Number($main_count.textContent);

$main_add.addEventListener("click", ()=>{
  counter += 1;
  $main_count.textContent = counter;
})

$main_sub.addEventListener("click", ()=>{
  if(!(counter<1)){
    counter-=1;
    $main_count.textContent = counter;
  }else{
    alert("No se puede decrementar más alla del número 0");
  }
})

$main_res.addEventListener("click", ()=>{
  $main_count.textContent = initialValue;
  counter = initialValue;
})