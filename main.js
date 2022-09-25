addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let coms, val_desc, pagof;
        const desc=15;
        coms=Number(prompt("Ingrese el valor de consumo: "));
        val_desc=(coms*desc)/100;
        pagof=coms-val_desc;
        if(coms>130000) {
            alert("¡HAZ GANADO UN DESCUENTO DEL "+desc+"%!\n▶ Su consumo es de: $"+coms+"\n▶ El valor de descuento es de: $"+val_desc+"\n▶ Su pago final es de: $"+pagof);
        }
        else {
            alert("¡NO HAZ GANADO DESCUENTO!\n▶ El valor a pagar es de: $"+coms);
        }
    }, 500);
}); 