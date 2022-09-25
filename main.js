addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let est, nom, ape, edad, nota1, nota2, nota3, prom;
        est=Number(prompt("Ingrese el número de estudiantes: "));
        for(let i=1; i<=est; i++){
            nom=prompt("Ingrese el nombre del estudiante #"+i+": ");
            ape=prompt("Ingrese el apellido del estudiante #"+i+": ");
            edad=Number(prompt("Ingrese la edad del estudiante #"+i+": "));
            nota1=Number(prompt("Ingrese la nota 1 del estudiante #"+i+": "));
            nota2=Number(prompt("Ingrese la nota 2 del estudiante #"+i+": "));
            nota3=Number(prompt("Ingrese la nota 3 del estudiante #"+i+": "));
            prom=(nota1+nota2+nota3)/3;
            if(prom>=7){
                alert("El estudiante "+nom+" "+ape+" tiene "+edad+" años, su promedio es "+prom+" y está aprobado");
            }
            else{
                alert("El estudiante "+nom+" "+ape+" tiene "+edad+" años, su promedio es "+prom+" y está reprobado");
            }
        }
    }, 500);
});