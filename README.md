# ES6-Dimitroff-Osvaldo
Consignas
Copiar las funciones en un archivo JavaScript.
Simplificar la composición de los strings.
Simplificar escritura de los objetos literales.
Transformar las funciones básicas en funciones flecha.
Crear un repositorio con el nombre ES6-miNombre (nombre de cada uno de ustedes) y subir las soluciones a Github a través de la consola o GitHub Desktop.
function saludar(nombre){
    let nombre = nombre;
    return 'Hola ' + nombre;
}

// Mostrar el resultado por consola
saludar('Alejandro');
function multiplicar(a, b){
    const resultado = a + b;
    return resultado;
}

// Mostrar el resultado por consola
multiplicar(3, 15)
function crearAlumno(nombre, apellido, edad, materias){
    let alumno = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        materias: materias
    }

    return alumno;
}

// Mostrar el resultado por consola.
crearAlumno('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés'])
function devolverFecha(){
    return 'Hoy es ';
}

// Mostrar el resultado por consola.
devolverFecha('10','09','2020');