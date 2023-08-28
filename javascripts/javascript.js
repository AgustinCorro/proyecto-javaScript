class Alumno {
    constructor() {
        this.calificaciones = [];
    }

    registrarNota(nota) {
        if (this.calificaciones.length < 10) { 
            this.calificaciones.push(nota);
            return true;
        }
        return false;
    }

    calcularAprobadas() {
        return this.calificaciones.filter(nota => nota >= 7).length;
    }

    calcularDesaprobadas() {
        return this.calificaciones.filter(nota => nota < 7).length;
    }

    verificarNota(nota) {
        if (typeof nota === 'number' && nota >= 0 && nota <= 10) {
            if (nota === 0) {
                return "aplazado";
            } else if (nota >= 7) {
                return "aprobado";
            } else if (nota === 10) {
                return "aprobado con la mejor nota";
            } else {
                return "desaprobado";
            }
        } else {
            return "nota no válida";
        }
    }
}

const alumno = new Alumno();
const notas = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

let notasIngresadas = 0; 

while (notasIngresadas < 10) { 
    const notaIngresada = parseFloat(prompt("Ingrese su nota:"));

    if (!isNaN(notaIngresada)) {
        const verificacion = alumno.verificarNota(notaIngresada);

        if (verificacion !== "nota no válida") {
            if (alumno.registrarNota(notaIngresada)) {
                notasIngresadas++;
                alert(`Tu examen está ${verificacion}`);
                const aprobadas = alumno.calcularAprobadas();
                const desaprobadas = alumno.calcularDesaprobadas();
                alert(`Hasta ahora, has aprobado ${aprobadas} materias y desaprobado ${desaprobadas} materias.`);
            } else {
                alert("Ya has ingresado el máximo de 10 notas.");
            }
        } else {
            alert("Nota no válida. Por favor, ingrese su nota en valor numérico.");
        }
    } else {
        alert("Ingreso inválido. Por favor, ingrese un número.");
    }
}



