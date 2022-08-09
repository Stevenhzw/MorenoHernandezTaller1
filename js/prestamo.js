var montoInicial, genero, edad, montoFinal, cuotas, categoria, tasa, periodoAhorro, i, k, l, cuota, meses;
tasa = 0.15;
var fecha = new Date();
do{
    edad = prompt("Ingrese su edad: ");
    if (edad >= 80){
    alert("Rango de edad excedido")}
    else if (edad <= 17){
    alert("No puede pedir un prestamo siendo menor de edad")};
}while(edad <= 17 || edad >= 80);

do{
    genero = prompt("Ingrese su genero 1: masculino o 2: femenino ");
if (genero != 1 && genero != 2)
    alert("Ingrese la opcion valida segun su genero");
}while(genero != 1 && genero != 2);

do{
    categoria = prompt("Ingrese segun su categoria 1: estudiante o 2: otro ");
if (categoria != 1 && categoria != 2){
    alert("Ingrese la opcion valida segun su categoria");
}
}while(categoria != 1 && categoria != 2);

do{
    montoInicial = prompt("Ingrese el monto que desea adquirir");
    if (categoria == 1 && montoInicial > 2000){
    alert("Los estudiantes no pueden pedir un monto mayor a 2000 dolares");
    }
}while(categoria == 1 && montoInicial > 2000);

do{
    periodoAhorro = parseFloat(prompt("Ingrese el periodo que durará el prestamo: 6 meses, 12 meses o 18 meses"));
    if(periodoAhorro != 6 && periodoAhorro != 12 && periodoAhorro !=18)
    alert("Por favor escoga un periodo valido");
}while(periodoAhorro != 6 && periodoAhorro != 12 && periodoAhorro !=18);

if (genero == 2 && periodoAhorro == 6 || periodoAhorro == 12){
    tasa = 0.10;
}

if (edad > 23 && edad < 35) {
    tasa = 0.12;
}

if ( edad > 23 && edad < 35 && genero == 2 && periodoAhorro == 6 || periodoAhorro == 12){
    tasa = 0.07;
}
meses = periodoAhorro;

k = meses;
l = 1;

periodoAhorro = periodoAhorro / 12;
document.write("Su monto inicial es de: "+montoInicial+" dolares <br>");
document.write("Su tasa de interes sera de: "+ tasa+" % <br>");
document.write("Su periodo de ahorro sera de: "+periodoAhorro +" años <br>");
tasa = tasa + 1;
tasa = tasa ** periodoAhorro;
montoFinal = montoInicial * tasa;
document.write("Su monto final sera de: "+montoFinal.toFixed(2)+" dolares <br>");

cuota = montoFinal / meses;
document.write("Su cuota por mes sera de: "+cuota.toFixed(2)+" dolares <br>");

document.write("El dia que usted realizo el prestamo es: "+fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear()+" , por lo tanto pagara el " +fecha.getDate() +" de cada mes <br><br>");


do{
    document.write("Su mes No°" + l + " tendra una cuota de " + cuota.toFixed(2) +"<br>");
    l++;
}while(l!=k+1)
