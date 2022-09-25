addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let num, res="";
        num=Number(prompt("Ingrese un número: "));
        res+="▶ Número: "+num;
        if(num>0) {
            res+="\n▶ Valor: Positivo";
            if(num<100) {
                res+="\n▶ Es menor a 100";
            }
            if(num==100) {
                res+="\n▶ Es igual a 100";
            }
            if(num>100) {
                res+="\n▶ Es mayor a 100";
            }
        }

        else {
            res+="\n▶ Valor: Negativo\n▶ Es menor a 100";
        }
        alert(res);
    }, 500);
});