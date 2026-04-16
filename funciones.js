//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible (ingresos, egresos) {
   if (ingresos && egresos && ingresos>egresos) {
       return ingresos - egresos;
   }
   return 0;
} 

function calcularCapacidadPago (montoDisponible) {
 return montoDisponible * 0.5;

}

function calcularInteresSimple(Monto,Tasa,plazoAnios){
    return Monto*plazoAnios*Tasa/100;
}

function calcularTotalPagar(monto,interes){
    return monto + interes +100;
}

function calcularCuotaMensual(total,plazoAnios){
    return total / (plazoAnios * 12);
}

function aprobarCredito(capacidadPago, cuotaMensual) {
    if (capacidadPago >= cuotaMensual) {
        return "CREDITO APROBADO";
    } 
        return "CREDITO RECHAZADO";
    }

