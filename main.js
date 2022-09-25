addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let cant, sum_par=0, prod_imp=1;
        let pares=[];
        let impares=[];
        cant=Number(prompt("Ingrese hasta que número desea incluir: "));
        for(let i=1; i<=cant; i++) {
            if(i%2==0) {
                pares.push(i);
                sum_par+=i;
            } 
            else {
                impares.push(i);
                prod_imp*=i;
            }
        }
        alert("▶ Números pares: "+pares+"\n    La suma de los números pares es: "+sum_par+"\n\n▶ Numeros impares: "+impares+"\n    El producto de los números impares es: "+prod_imp);
    }, 500);
});