addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let prods, valor, subtot=0, val_iva, total;
        const iva=19;
        prods=Number(prompt("Ingrese la cantidad de productos: "));
        for(let i=1; i<=prods; i++){
            valor=Number(prompt("Ingrese el valor del producto #"+i+": "));
            subtot+=valor;
        }
        val_iva=(subtot*iva)/100;
        total=subtot+val_iva;
        alert("▶ El subtotal de la compra es: $"+subtot+"\n▶ El porcentaje de IVA es: "+iva+"%\n▶ El valor del IVA es: $"+val_iva+"\n▶ El total de la compra es: $"+total);
    }, 500);
});