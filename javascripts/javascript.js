/*Primera pre-entrega

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
*/




//Segunda pre-entrega

const notas = [
    {nota : "10"},
    {nota : "9"},
    {nota : "8"},
    {nota : "7"},
    {nota : "6"},
    {nota : "5"},
    {nota : "4"},
    {nota : "3"},
    {nota : "2"},
    {nota : "1"},
    {nota : "0"},
]

const notaIngresada = prompt("Ingrese su nota :")

const notaComprobada = notas.find((notaObj => notaObj.nota === notaIngresada ));

while (notaComprobada){
    if (notaComprobada.nota === "0"){
        alert(`Tu examen esta aplazado`)
        break;
    }else if(notaComprobada.nota >=  7){
        alert(`Tu examen esta aprobado`)
        break;
    }else if(notaComprobada.nota === "10"){
        alert(`Tu examen esta aprobado con la mejor nota`)
        break;
    }else if(notaComprobada.nota <= "6"){
        alert(`Tu examen esta desaprobado`)
        break;
    }
}if (notaComprobada === false)
alert(prompt("Nota no valida por favor ingrese su nota en valor numerico"))






