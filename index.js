function calcular(){
    totalcuenta = document.getElementById("TotCuentInp").value
    porcentajepropina = document.getElementById("PorcProp").value
    labelTotal = document.getElementById("TotCuent")
    labelPropina = document.getElementById("TotProp")
    labelTotalTotal = document.getElementById("TotTot")
    labelTotal.value = totalcuenta
    var propina = (porcentajepropina*totalcuenta)/100
    labelPropina.value = propina
    var totalpagar = parseFloat(propina) + parseFloat(totalcuenta)
    labelTotalTotal.value = totalpagar
}