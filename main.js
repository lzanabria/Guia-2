addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let n1, n2, resta;
        n1=Number(prompt("Ingrese el valor del primer número: "));
        n2=Number(prompt("Ingrese el valor del segundo número: "));
        if (n1>n2){
            resta=n1-n2;
            alert("El resultado de la resta es: "+resta);
        }
        else{
            alert("No es posible realizar la resta, porque el primer número no es mayor que el segundo");
        }
    }, 500);
});