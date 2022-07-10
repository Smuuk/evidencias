let x =10;

let instrumento = {
    nombre: 'bajo',
    tipo: 'cuerda',
    serie: 28,
    marca: 'squier',
    año: 1998,
    get lang(){
        return this.marca.toUpperCase();
    },
    set lang( lang ){
        this.marca = lang.toUpperCase();
    },
    marcaProcedencia: function(){
        return this.nombre + ' ' + this.tipo;
    },
    get instrumentoInfo(){
        return this.nombre + ' ' + this.tipo;
    }
}

let instrumento2 = {
    nombre: 'saxofon',
    tipo: 'viento',
    marcaProcedencia: function(){
        return this.nombre + ' ' + this.tipo;
    }
}

console.table(instrumento);

console.log(`aqui tenemos un ${instrumento.nombre} que es de tipo ${instrumento.tipo}`)

// console.log(instrumento.marcaProcedencia());


//leccion 3

let intrumento2 = new Object();
intrumento2.nombre = 'guitarra';
intrumento2.tipo = 'cuerda';
intrumento2.serie = '30';

console.log( intrumento2.serie );

//leccion 4
//for in
for( nombrePropiedad in instrumento){
    console.log( nombrePropiedad );
    console.log( instrumento[nombrePropiedad]);
}

//leccion 5

instrumento.serie = '55443322';
instrumento.serie = '44332211';

console.log( instrumento );

delete instrumento.serie;

console.log( instrumento );

//lecc 6

let instrumentoArray = Object.values( instrumento );
console.log( instrumentoArray );

let instrumentoString = JSON.stringify( instrumento );
console.log( instrumentoString );

//lecc 7
console.log( instrumento.instrumentoInfo );

//lecc 8
console.log( instrumento.lang );

instrumento.lang = 'ibanies';//se llama metodo set lang

console.log( instrumento.lang );//se llama metodo get lang
console.log( instrumento.marca );

//lecc 9
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    } //funcion lecc 10
}

let padre = new Persona('Ronaldo', 'Hernandez', 'correo@mail.com');
console.log( padre );

let madre = new Persona('Laura', 'Quetzalli', 'email@mail.com');
console.log( madre );

padre.nombre = 'Carlos';

console.log( padre );
console.log( madre );

// lecc 11

let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){};

// lecc 12

Persona.prototype.tel = '44332211';

padre.tel = '11223344';
console.log( padre.tel );

//lecc 13

//Uso de call para usar 
//el metodo persona1.nombreCompleto con los datos del persona2
console.log( instrumento.marcaProcedencia() );

console.log( instrumento.marcaProcedencia.call( instrumento2 ) );


