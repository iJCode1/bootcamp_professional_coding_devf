const os = require('os');

console.log(os.version()); // Muestra la versión del kernel
console.log(os.arch()); // Se obtiene la arquitectura (x64 o x86(x32))
console.log(os.cpus()); // Da información sobre el CPU
console.log('Número de procesadores lógicos', os.cpus().length);
console.log(os.freemem()); // Muestra la memoria libre
console.log(os.homedir()); // Muestra la carpeta home del usuario
console.log(os.hostname()); // Muestra la dirección IP
console.log(os.platform()); // Muestra la versión del sistema operativo
console.log(os.release()); // Muestra el sistema operativo
console.log(os.version()); // Muestra la versión del SO