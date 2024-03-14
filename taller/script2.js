const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21];
 function obtenerMenores (arr) {
    return arr.filter(num=>num < 8);
 }

 function obtenerMayoresIguales (arr) {
   return arr.filter (num=>num >= 8);
 }

 const obtenerNumerosMenores= (arreglo) => {
    const misNumerosMenores = [];

    for(const numero of arreglo) {
        if(numero < 8){
            misNumerosMenores.push(numero);
        }
    }

    return misNumerosMenores;
 }

 function contarElementos (arr) {
    return arr.length;
 }

 const Menores = obtenerMenores(fibonacci);
 const Mayores = obtenerMayoresIguales(fibonacci);

 const divMenores = document.getElementById("Menores");
 const divMayores = document.getElementById("Mayores");

 const elementosMenores = contarElementos(Menores);
 const elementosMayores = contarElementos(Mayores);

 divMenores.textContent = "existen {contarElementos(menores)} números menores que " + elementosMenores;
 divMayores.textContent = "existen {contarElementos(mayores)} números mayores o iguales que " + elementosMayores;


 
