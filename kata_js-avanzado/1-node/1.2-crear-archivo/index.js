const fs = require('fs');
const fileName = './my-file.txt';
let textContent = "Este mensaje lo escribi desde Node";


fs.writeFile(fileName, textContent, (err)=>{
  if(err){
    throw err;
  }else{
    console.log("Archivo creado con éxito!");
  }
});