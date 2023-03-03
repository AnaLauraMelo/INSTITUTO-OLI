function realizarOperacion (unNumero, otroNumero, operacion): any {
    const resultado = operacion(unNumero, otroNumero);
    return resultado;

}

function dividir(unNumero, otroNumero): number {
    return unNumero / otroNumero;
}


realizarOperacion (unNumero 1, otroNumero 2, operacion: dividir);

fuction hacerAlgo(callback): void {
    const saliomal = true;
     if (saliomal) {
        callback({error: 'algo salio mal', null})
     }else {
        callback(null, {resultadoExitoso: ''})
     }
}

