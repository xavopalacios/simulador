//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
 
function calcular() {
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);     
    
    let montoDisponible = calcularDisponible(ingresos, egresos);
    document.getElementById("spnDisponible").innerText =  montoDisponible

    let capacidadPago = calcularCapacidadPago(montoDisponible);
    document.getElementById("spnCapacidadPago").innerText = capacidadPago;

    let montoCredito = parseFloat(document.getElementById("txtMonto").value);
    let tasaInteres = parseFloat(document.getElementById("txtTasaInteres").value);
    let plazoAnios = parseFloat(document.getElementById("txtPlazo").value);
    let interes = calcularInteresSimple(montoCredito, tasaInteres, plazoAnios);
    document.getElementById("spnInteresPagar").innerText = interes;

    let totalPagar = calcularTotalPagar(montoCredito, interes);
    document.getElementById("spnTotalPrestamo").innerText = totalPagar;

    let pagoMensual = calcularCuotaMensual(totalPagar, plazoAnios).toFixed(2);
    document.getElementById("spnCuotaMensual").innerText = pagoMensual;    
    
    let estadoCredito = aprobarCredito(capacidadPago, pagoMensual);
    document.getElementById("spnEstadoCredito").innerText = estadoCredito;


}

function limpiar() {
    document.getElementById("txtIngresos").value = "";
    document.getElementById("txtEgresos").value = "";
    document.getElementById("txtMonto").value = "";
    document.getElementById("txtTasaInteres").value = "";
    document.getElementById("txtPlazo").value = "";
    document.getElementById("spnDisponible").innerText = "";
    document.getElementById("spnCapacidadPago").innerText = "";
    document.getElementById("spnInteresPagar").innerText = "";
    document.getElementById("spnTotalPrestamo").innerText = "";
    document.getElementById("spnCuotaMensual").innerText = "";
    document.getElementById("spnEstadoCredito").innerText = "";
}