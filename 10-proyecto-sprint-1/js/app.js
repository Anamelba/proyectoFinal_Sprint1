var estudiantes = [];

function obtenerListaEstudiantes()
{
    // TO DO: Retornar la lista de estudiantes
   return estudiantes;
}

function agregarEstudiante()
{
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    var nombre = prompt("Ingrese nombre de la estudiante: ", "Ejm: Anamelba");
    var porcentajeTecnico = prompt("Ingrese porcentaje tecnico: ", "Ejm: 60");
    var porcentajeHSE = prompt("Ingrese porcentaje HSE: ", "Ejm: 50");

    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    function estudiante(nombre, porcentajeTecnico, porcentajeHSE)
    {
      this.nombre = nombre;
      this.porcentajeTecnico = porcentajeTecnico;
      this.porcentajeHSE = porcentajeHSE
    }

    // TO DO: Retornar el estudiante recientemente creado
    var estudent = new estudiante(nombre, porcentajeTecnico, porcentajeHSE);
    estudiantes.push(estudent);
    return estudent;
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " +estudiante.porcentajeTecnico + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.porcentajeHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes)
{
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    var listaEstudent = "";
    for(var i in estudiantes)
    {
      listaEstudent += mostrar(estudiantes[i]);
    }
    return listaEstudent;
    // Retornar el template de todos los estudiantes

}
function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
var estBuscado;
    for(var i in estudiantes)
    {
      if(nombre.toLowerCase() == estudiantes[i].nombre.toLowerCase())
      {
        estBuscado = estudiantes[i];
      }
    }
    return estBuscado;
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

}

function topTecnico(estudiantes)
{
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    return estudiantes.sort(function(a,b)
    {
      return b.porcentajeTecnico - a.porcentajeTecnico;
    });
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    return estudiantes.sort(function(a,b)
    {
      return b.porcentajeHSE - a.porcentajeHSE;
    });
}
