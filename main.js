addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let p, t, estado="";
        p=Number(prompt("Ingrese el valor de la presión: "));
        t=Number(prompt("Ingrese el valor de la temperatura: "));

        if(p>200) {
            estado="Alarma";
        }
        else if(t>100) {
            estado="Alarma";
        }
        else {
            estado="Normal";
        }
        alert("▶  El estado actual es: "+estado);
    }, 500);
});