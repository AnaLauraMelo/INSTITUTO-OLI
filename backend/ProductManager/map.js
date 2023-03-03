const libros = [1, 2, 3, 4, 5];

const suma1 = libros.map(callbackfn: (elemento) : number => elemento + 1); 
const por2 = libros.map(callbackfn: (elemento) : number => elemento * 2);

function sumarElAnterior(elemento, indice, array): any {
    if (indice ≠ 0) {
        return elemento + array [indice - 1];
    }
    return elemento;
}

const sumadoAlAnterior  = libros.map(callbackfn: sumarElAnterior);

libros.map (callbackfn(elemento, indice, array) : void => { }) 



function myMap(array, callback): any[] {
    const nuevoArray = [];
    for (let i = 0; i < array.length; i++){
        const nuevoValor = callback(array[i], i, array);
        nuevoArray.push(...items:nuevoValor);
    }
    return nuevoArray;
}

