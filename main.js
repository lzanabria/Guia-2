addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let val, opc, desc, val_desc, pago;
        val=Number(prompt("Ingrese el valor del helado: "));
        opc=Number(prompt("Seleccione el tipo de membresía: \n▶ 1. Tipo A \n▶ 2. Tipo B \n▶ 3. Tipo C"));
        if(opc==1){
            desc=10;
            val_desc=(val*desc)/100;
            pago=val-val_desc;
        }
        else if(opc==2){
            desc=15;
            val_desc=(val*desc)/100;
            pago=val-val_desc;
        }
        else if(opc==3){
            desc=20;
            val_desc=(val*desc)/100;
            pago=val-val_desc;
        }
        else{
            alert("¡Por favor seleccione una opción válida!");
            return;
        }
        alert("¡FELICIDADES HAZ RECIBIDO UN DESCUENTO DEL "+desc+"%!"+"\n▶ Valor del helado: $"+val+"\n▶ Valor del descuento: $"+val_desc+"\n▶ Valor a pagar: $"+pago);
    }, 500);
});