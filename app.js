/*Calcula la potencia de 2 elevado a un número específico. Debes de usar un loop (no Math.pow()).

Ejemplo:

const output = powerOfTwo(10);

console.log(ouput); // -> 1024*/
const powerOfTwo = function (num){//num será el exponente
    let result=1;
    
    for(let i=0; i< num; i++){
    result *= 2;
    }
    return result;
};
console.log(powerOfTwo(10));// cuando num = 0 retorna 1, cuando num=10 retorna 1024,
