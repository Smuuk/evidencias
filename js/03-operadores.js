let op1 = 10;
let op2 = 2;

// suma +
//resta -
//division /
// multiplicacion *
// exponente(potencia) **
z = op1 ** op2;
console.log(z);
// moduus(residuo) %
z = op1 % op2;
console.log(`el valor del residuo de la division de 10/2 es: ${z}`);

// incremento ++
    //pre incremento (operador antes de la variable)
    y = ++op1;
    console.log(y);
    //otra forma de incrementar +=
    y += 4;
    console.log(y);

// decremento --
    //pre decremento
    x = --y;
    console.log(x);

    //otra forma de decremento -=
    x -= 4;
    console.log(x);

    


// ------------- OPERADORES DE COMPARACION -------------

let a = 3, b = 2, c = '3';

let z2 = a == c; //se revisa el valor sin importar el tipo
console.log(z2);

z2 = a === c; //se revisa el valor y tambien los tipos
console.log(z2);

// operador de "es distinto a...?"

z2 = a != c;  //se revisa el valor sin importar el tipo
console.log(z2);

z2 = a !== c;//se revisa el valor y tambien los tipos
console.log(z2);


