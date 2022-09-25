addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let n1, n2, n3, mayor;
        n1=Number(prompt("Ingrese el valor del primer número: "));
        n2=Number(prompt("Ingrese el valor del segundo número: "));
        n3=Number(prompt("Ingrese el valor del tercer número: "));
        
        if(n1>n2 && n1>n3){
            mayor=n1;
        }

        if(n2>n1 && n2>n3){
            mayor=n2;
        }

        if(n3>n1 && n3>n2){
            mayor=n3;
        }
        alert("▶ El numero mayor es: "+mayor);
    }, 500);
});