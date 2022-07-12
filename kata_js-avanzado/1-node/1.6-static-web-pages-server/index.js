const http = require('http');
const url = require('url');
const fs = require('fs');
const colors = require("colors");

const server = http.createServer((request, response)=>{
  // Paso 1: Obtener la URL, concretamente la Path de la request.
  const urlObject = url.parse(request.url);
  const path = urlObject.path;
  let fileSystemPath = '';

  // Paso 2: Comprobar el valor que solicito el usuario en la Path de la URL
  if(path === '/'){
    // Paso 2.1: Si la url solicitada es localhost:8080
    // el path es / y entonces regresamos el index.html
    fileSystemPath = './static/index.html';
  }else{
    // Paso 2.2: Si la url solicitada es localhost:8080
    // el path es /algo y entonces regresamos el static/algo
    fileSystemPath = `./static${path}`;
  }

  // Paso 3: Validar que el fileSystemPath tenga un status valido
  // Preguntar si ¿existe el archivo?
  fs.stat(fileSystemPath, (error) => {
    if(!error){
      // Paso 3.1: Existe fileSystemPath e intentamos leer el archivo
      fs.readFile(fileSystemPath, (error, file)=>{
        // Paso 3.1.1: Encuentra el archivo y lo regresa en el response
        if(!error){
          const status = 200;
          const mimeType = {'Content-Type': 'text/html'};
          response.writeHead(status, mimeType);
          response.write(file);
          response.end();
        }else{
        // Paso 3.1.3: No encuentra el archivo y regresa un error del servidor
          const status = 500;
          const mimeType = {'Content-Type': 'text/plain'};
          response.writeHead(status, mimeType);
          response.write('Error en mi servidor');
          response.end();
        }
      });
    }else{
      // Paso 3.2: No existe el fileSystemPath y regresamos un 404
      const status = 404;
      const mimeType = {'Content-Type': 'text/html'};
      response.writeHead(status, mimeType);
      response.write("<html> <body> <h2>Dio Error 404!</h2> </body> </html>");
      response.end();
    }
  })
});

server.listen(8080);
console.log('Inicie mi servidor de nuevo!'.rainbow);

/**
 * RETO
 * 1. Quitar la repeticion de la llamada a los metodos writeHead, write y end
 * 2. Quitar el texto en duro 'Content-Type'
 */