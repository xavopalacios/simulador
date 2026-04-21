//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
 
function calcular() {
    
    let ingresos = parseFloat(document.getElementById("txtIngresos").value) || 0;
    
    let arriendo = parseFloat(document.getElementById("txtArriendo").value) || 0;
    let alimentacion = parseFloat(document.getElementById("txtAlimentacion").value) || 0;
    let varios = parseFloat(document.getElementById("txtVarios").value) || 0;
    
    
    let v_gastosTotales = gastosTotales(arriendo, alimentacion, varios);
    let montoDisponible = calcularDisponible(ingresos, v_gastosTotales);
    
    document.getElementById("spnDisponible").innerText =  "$" + montoDisponible.toFixed(2);
    document.getElementById("spnGastosTotales").innerText = "$" + v_gastosTotales.toFixed(2);

    let capacidadPago = calcularCapacidadPago(montoDisponible);
    document.getElementById("spnCapacidadPago").innerText = "$" + capacidadPago.toFixed(2);

    let montoCredito = parseFloat(document.getElementById("txtMonto").value) || 0;
    let tasaInteres = parseFloat(document.getElementById("txtTasaInteres").value) || 0;
    let plazoAnios = parseFloat(document.getElementById("txtPlazo").value) || 0;
    
    let interes = calcularInteresSimple(montoCredito, tasaInteres, plazoAnios);
    document.getElementById("spnInteresPagar").innerText = "$" + interes.toFixed(2);

    let totalPagar = calcularTotalPagar(montoCredito, interes);
    document.getElementById("spnTotalPrestamo").innerText = "$" + totalPagar.toFixed(2);

    let pagoMensual = calcularCuotaMensual(totalPagar, plazoAnios).toFixed(2);
    document.getElementById("spnCuotaMensual").innerText = "$" + pagoMensual;    
    
    let estadoCredito = aprobarCredito(capacidadPago, pagoMensual);
    document.getElementById("spnEstadoCredito").innerText = estadoCredito;
}
