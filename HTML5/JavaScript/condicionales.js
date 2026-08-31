let numero = parseInt(prompt("Ingresar el numero: "));

switch (true) {
    case (numero > 0):
        console.log("El numero ingresado es positivo",numero);
        break;
    case (numero < 0):
        console.log("El numero ingresado es neativo",numero);
        break;
    case (numero == 0):
        console.log("El numero ingresado es cero",numero);
        break;
    default:
        break;
}