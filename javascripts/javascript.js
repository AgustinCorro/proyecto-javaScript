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






