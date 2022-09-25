addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let n1, n2, n3, mayor, menor, igual="";
        n1=Number(prompt("Ingrese el valor del primer número: "));
        n2=Number(prompt("Ingrese el valor del segundo número: "));
        n3=Number(prompt("Ingrese el valor del tercer número: "));

        if (n1>n2 && n1>n3) {
            mayor=n1;
        }
        else if (n2>n1 && n2>n3) {
            mayor=n2;
        }
        else if (n3>n1 && n3>n2) {
            mayor=n3;
        }

        if (n1<n2 && n1<n3) {
            menor=n1;
        }
        else if (n2<n1 && n2<n3) {
            menor=n2;
        }
        else if (n3<n1 && n3<n2) {
            menor=n3;
        }

        if (n1==n2 && n1==n3) {
            igual="Los números son iguales";
        }

        if (igual=="") {
            alert("▶ Números: ["+n1+", "+n2+", "+n3+"]\n▶ Número mayor: "+mayor+"\n▶ Número menor: "+menor);
        }
        else {
            alert("▶ Números: ["+n1+", "+n2+", "+n3+"]\n▶ "+igual);
        }
    }, 500);
});