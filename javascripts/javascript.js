alert("Bienvenido a la aventura")
let nombre = prompt("Dime tu nombre")
alert(`¡Hola ${nombre} bienvenido/a!`)

let eleccion = prompt ("Muy bien, empecemos; te encuentras en un bosque con un camino doble, ¿debes elegir, derecha o izquierda?")

while (eleccion == "izquierda"){
    let eleccion21 = prompt("Elegiste izquierda y te encuntras una cueva, decides entrar ¿si o no?")
    if (eleccion21 == "si"){
        alert("¡Felicidades has encontrado un cofre lleno de oro!")
        break;
    }else if (eleccion21 =="no"){
        alert("Sigue con tu aventura en el bosque, quizas encuentres algo interesante...")
        break;
    }
    else{
        alert("Debes elegir un opcion si o no")
        eleccion21 =prompt("¿Decides entrar?");
    }
}

function camino(){
    let eleccion31 = prompt("Elegiste el camino de la derecha y te encontraste con un oso, ¿decides pelear o irte?");
    if (eleccion31 == "pelear"){
        alert("¡Felicidades! Ganaste la pelea con el oso y puedes seguir con tu camino sin ningun rasguño");
    }else if (eleccion31 == "irme"){
        alert("¡Decidiste irte cautelosamente y no pelear, sigue con tu camino!");
    }else{
        alert("Debes elegir si pelear o irte")
        eleccion31 = prompt("pelear o irme");
    }
}

if (eleccion == "derecha"){
    camino()
}

alert("¡Muchas gracias por participar de la aventura!")
    

