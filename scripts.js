function ejercicios(){
    
    let diaSemana = prompt("¿Que día es hoy?");

    switch (diaSemana) {
        case "lunes":
            alert("Hoy dia lunes salimos a correr.");
            break

        case "martes":
            alert("Hoy dia martes tenemos clase de pilates.");
            break

        case "miércoles":
            alert("Hoy miércoles toca hacer ejercicios aerobicos.");
            break

        case "jueves":
            alert("Hoy jueves damos unas vueltas en bici.");
            break

        case "viernes":
            alert("Hoy viernes hay clase de yoga.");
            break

        case "sábado":
            alert("Hoy sábado salimos a caminar.");
            break

        case "domingo":
            alert("Hoy domingo a descansar!");
            break

        default:
            alert("Escribe el día de semana en minúsculas.");
    }
}

function buclex5(){
    for(i = 0; 1 <= 4; i++){
        document.write("El número es: " + i + "<br>");
    }
}

function mostrar20a70(){
    for(i = 20; i <= 70; i++){
        document.write("El número es: " + i + "<br>");
    }
}

function holamundo(){
    var numero = prompt("Cuantas veces quieres que se repita Hola mundo:")
    
    for( i = 1; i <= numero ; i++){
        document.write("Hola mundo" + numero + "<br>");
    }
}