addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let b, h, a;
        b=Number(prompt("Ingrese el valor de la base del rectángulo: "));
        h=Number(prompt("Ingrese el valor de la altura del rectángulo: "));

        if(b>0 && h>0) {
            a=b*h;
            alert("El área del rectángulo es: "+a);
        }
        else {
            alert("¡Haz ingresado valores negativos!\nNo se puede calcular el área del rectángulo");
        }
    }, 500);
});