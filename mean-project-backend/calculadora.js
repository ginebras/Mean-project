'use strict'

var parametros=process.argv.slice(2);

var numero1=parseInt(parametros[0]);
var numero2=parseInt(parametros[1]);

var operaciones=`
La suma es: ${numero1 + numero2}
La multiplicacion es:${numero1 * numero2}
`;

console.log(operaciones);
console.log("Hola mundo con NODEJS");