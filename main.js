addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let opc, b_triangulo, h_triangulo, a_triangulo, r_circulo, a_circulo;
        opc=Number(prompt("Seleccione una opción: \n▶  1. Área de un triángulo \n▶  2. Área de un círculo"));
        if (opc==1) {
            b_triangulo=Number(prompt("Ingrese la base del triángulo: "));
            h_triangulo=Number(prompt("Ingrese la altura del triángulo: "));
            a_triangulo=(b_triangulo*h_triangulo)/2;
            alert("El área del triángulo es: "+a_triangulo);
        }
        else if (opc==2) {
            r_circulo=Number(prompt("Ingrese el radio del círculo: "));
            a_circulo=Math.PI*Math.pow(r_circulo, 2);
            alert("El área del círculo es: "+a_circulo);
        }
        else {
            alert("¡Por favor seleccione una opción válida!");
        }
    }, 500);
});