addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let opc, hrs, pago;
        const paghr_planta=20000, paghr_admin=10000;
        hrs=Number(prompt("Ingrese la cantidad de horas trabajadas: "));
        opc=Number(prompt("Seleccione el tipo de empleado: \n▶ 1. Empleado de planta.\n▶ 2. Empleado administrativo."));
        
        if (opc==1) {
            pago=hrs*paghr_planta;
            alert("▶ Empleado: Planta.\n▶Pago por hora: $"+paghr_planta+"\n▶ Horas trabajadas: "+hrs+"\n▶ Pago: $"+pago);
        }
        else if (opc==2) {
            pago=hrs*paghr_admin;
            alert("▶ Empleado: Administrativo.\n▶Pago por hora: $"+paghr_admin+"\n▶ Horas trabajadas: "+hrs+"\n▶ Pago: $"+pago);
        }
        else {
            alert("¡Por favor seleccione una opción válida!");
        }
    }, 500);
});