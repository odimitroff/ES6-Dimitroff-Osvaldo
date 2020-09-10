const saludar = (nombre) => ({ nombre })
console.log(saludar('Profe Alejandro'))


const multiplicar = (a, b) => a + b;
console.log(multiplicar(2, 10))

const crearAlumno = (nombre, apellido, edad, materias) => ({
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    materias: materias
})
console.log(crearAlumno('Lio', 'Mesi', '33', ['TLPA','Matematica','Ingles']))

const devolverFecha = (...arguments) => 'Hoy es '+arguments[0]+'/'+arguments[1]+'/'+arguments[2];
console.log(devolverFecha('10','09','2020'))