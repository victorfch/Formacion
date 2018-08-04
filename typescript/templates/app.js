"use strict";
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activ\u00F3 la " + objeto;
    }
    console.log(mensaje);
}
activar("Gordon", "batseñal", "tarde");
