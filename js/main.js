// Clase para representar los entrenamientos del gimnasio
class Entrenamiento {
    constructor(id, ejercicio, minutos, estado) {
        this.id = id;
        this.ejercicio = ejercicio;
        this.minutos = minutos;
        this.estado = estado;
    }
    completar() {
    this.estado = "Completado";
    console.log("El entrenamiento de " + this.ejercicio +
        " fue completado.");
}
}
function saludarUsuario(nombre) {
    alert("¡Bienvenido al Simulador de Gimnasio, " + nombre + "!");
}


let nombreUsuario = prompt("¿Cómo te llamás?");

if (nombreUsuario === null || nombreUsuario.trim() === "") {
    nombreUsuario = "Usuario";
}
saludarUsuario(nombreUsuario);
function sumarMinutos(totalActual, minutosNuevos) {
    return totalActual + minutosNuevos;
}

let minutosTotales = 0;
let cantidadEntrenamientos = 0;

// Guardamos los entrenamientos registrados por el usuario
const entrenamientosRegistrados = [];

let continuar = "si";

while (continuar === "si") {
// Preguntamos qué ejercicio realizó el usuario
const respuestaEjercicio = prompt("¿Qué ejercicio realizaste?");
// Validamos el nombre del ejercicio
if (respuestaEjercicio === null) {
    alert("Finalizaste el registro de entrenamientos.");
    break;
}

const nombreEjercicio = respuestaEjercicio.trim();

if (nombreEjercicio === "") {
    alert("Ingresaste un nombre de ejercicio inválido.");
    continue;
}
const respuestaMinutos = prompt("¿Cuántos minutos entrenaste?");

if (respuestaMinutos === null) {
    alert("Finalizaste el registro de entrenamientos.");
    break;
}

const minutosIngresados = Number(respuestaMinutos);

    
if (Number.isFinite(minutosIngresados) && minutosIngresados > 0) {
minutosTotales = sumarMinutos(minutosTotales, minutosIngresados);
    cantidadEntrenamientos++;
    // Creamos un objeto con los minutos registrados
const nuevoEntrenamiento = new Entrenamiento(
    cantidadEntrenamientos,
    nombreEjercicio,
    minutosIngresados,
    "Pendiente"
);

// Guardamos el objeto en nuestro array
entrenamientosRegistrados.push(nuevoEntrenamiento);

    alert("Entrenamiento registrado correctamente.");
} 
   else {
        alert("Ingresaste una cantidad de minutos inválida.");
    }

    
do {
    continuar = prompt("¿Querés registrar otro entrenamiento? Escribí si o no.");

    if (continuar === null) {
        continuar = "no";
    } else {
        continuar = continuar.toLowerCase().trim().replace("í", "i");
    }

    if (continuar !== "si" && continuar !== "no") {
        alert("Respuesta inválida. Escribí si o no.");
    }

} while (continuar !== "si" && continuar !== "no");
}
const convertirAHoras = (minutos) => {
    return minutos / 60;
};

const horasEntrenadas = convertirAHoras(minutosTotales);

function mostrarResumen(cantidad, minutos, horas) {
    const palabraEntrenamiento = cantidad === 1 ? "entrenamiento" : "entrenamientos";
    const palabraHora = horas === 1 ? "hora" : "horas";

    const mensaje = "Registraste " + cantidad + " " +
        palabraEntrenamiento + ", con un total de " +
        minutos + " minutos, equivalentes a " +
        horas + " " + palabraHora + ".";

    alert(mensaje);
    console.log(mensaje);
}
mostrarResumen(cantidadEntrenamientos, minutosTotales, horasEntrenadas);


// Lista de ejercicios disponibles en nuestro gimnasio
const ejercicios = [
    "Sentadillas",
    "Flexiones",
    "Abdominales",
    "Dominadas",
    "Plancha"
];
// Agregamos un ejercicio al final de la lista
ejercicios.push("Burpees");

console.log("Ejercicios después de agregar Burpees:", ejercicios);

// Agregamos un ejercicio prioritario al principio de la lista
ejercicios.unshift("Calentamiento");

console.log("Ejercicios después de agregar Calentamiento:", ejercicios);

// Eliminamos el último ejercicio de la lista
const ejercicioEliminado = ejercicios.pop();

// Buscamos un ejercicio dentro de la lista
const respuestaBusqueda = prompt("¿Qué ejercicio querés buscar?");
const ejercicioBuscado = respuestaBusqueda === null ? "" : respuestaBusqueda.trim();

const ejerciciosMinusculas = ejercicios.map(ejercicio => ejercicio.toLowerCase());
const busquedaMinusculas = ejercicioBuscado.toLowerCase();

if (ejerciciosMinusculas.includes(busquedaMinusculas)) {
    const posicion = ejerciciosMinusculas.indexOf(busquedaMinusculas);

    console.log("El ejercicio " + ejercicios[posicion] +
        " está en la posición " + posicion + ".");
} else if (ejercicioBuscado === "") {
    console.log("No ingresaste ningún ejercicio para buscar.");
} else {
    console.log("El ejercicio " + ejercicioBuscado +
        " no está en la lista.");
}

console.log("Se ha eliminado el elemento: " + ejercicioEliminado);

// Reemplazamos un ejercicio utilizando su índice
ejercicios.splice(3, 1, "Estocadas");

console.log("Ejercicios después del reemplazo:", ejercicios);

// Función para mostrar todos los ejercicios del gimnasio
function mostrarEjercicios(lista) {
    console.log("--- LISTA DE EJERCICIOS DEL GIMNASIO ---");

    for (const ejercicio of lista) {
        console.log("Ejercicio: " + ejercicio);
    }

    console.log("Total de ejercicios: " + lista.length);
}

mostrarEjercicios(ejercicios);




// Creamos tres entrenamientos utilizando nuestra clase
const entrenamiento1 = new Entrenamiento(1, "Sentadillas", 30, "Pendiente");
const entrenamiento2 = new Entrenamiento(2, "Flexiones", 20, "Pendiente");
const entrenamiento3 = new Entrenamiento(3, "Plancha", 15, "Pendiente");
// Mostramos el estado inicial de los entrenamientos
console.log("--- ESTADO INICIAL DE LOS ENTRENAMIENTOS ---");
console.log(entrenamiento1);
console.log(entrenamiento2);
console.log(entrenamiento3);

// Completamos dos entrenamientos
entrenamiento1.completar();
entrenamiento2.completar();

// Mostramos el estado final de los entrenamientos
console.log("--- ESTADO FINAL DE LOS ENTRENAMIENTOS ---");
console.log(entrenamiento1);
console.log(entrenamiento2);
console.log(entrenamiento3);
// Guardamos los entrenamientos en un array
const entrenamientos = [
    entrenamiento1,
    entrenamiento2,
    entrenamiento3
];

// Recorremos los entrenamientos y mostramos su información
console.log("--- RESUMEN DE ENTRENAMIENTOS ---");

for (const entrenamiento of entrenamientos) {
    console.log(
        "Ejercicio: " + entrenamiento.ejercicio +
        " | Duración: " + entrenamiento.minutos + " minutos" +
        " | Estado: " + entrenamiento.estado
    );
}
// Mostramos los entrenamientos registrados por el usuario
function mostrarEntrenamientosRegistrados(lista) {
    console.log("--- ENTRENAMIENTOS REGISTRADOS POR EL USUARIO ---");

    for (const entrenamiento of lista) {
        console.log(
            "ID: " + entrenamiento.id +
            " | Ejercicio: " + entrenamiento.ejercicio +
            " | Minutos: " + entrenamiento.minutos +
            " | Estado: " + entrenamiento.estado
        );
    }

    console.log("Total de entrenamientos registrados: " + lista.length);
}

mostrarEntrenamientosRegistrados(entrenamientosRegistrados);
// Completamos el primer entrenamiento registrado por el usuario
if (entrenamientosRegistrados.length > 0) {
    entrenamientosRegistrados[0].completar();

    console.log("--- PRIMER ENTRENAMIENTO ACTUALIZADO ---");
    console.log(entrenamientosRegistrados[0]);
}