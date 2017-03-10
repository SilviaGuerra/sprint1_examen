var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nombre = prompt("Ingrese nombre de estudiante");
    var puntosTecnicos = prompt("Ingrese puntaje técnico");
    var puntosHse = prompt("Ingrese puntaje HSE");
    var estudiante = {
      nombre: nombre,
      puntosTecnicos: puntosTecnicos,
      puntosHse: puntosHse
    }

    estudiantes.push(estudiante);
    return estudiante;
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante

    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    //Retornar el template de todos los estudiantes
    var resultado = "";

    estudiantes.forEach(function (estudiante){
      return resultado += mostrar(estudiante);
    });

    return resultado;
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

    var estudianteBuscado = estudiantes.filter(function (estudiante) {
      return estudiante.nombre.toLowerCase () === nombre.toLocaleLowerCase();

    });

    return estudiantesBuscado;
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

    var estudiantesTop = estudiantes.sort(a, b) {
      return a.puntosTecnicos < b.puntosTecnicos;
    });

    return estudiantesTop;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var estudiantesTop = estudiantes.sort(a, b){
      return a.puntosHse < b.puntosHse;
    });

    return estudiantesTop;
}
