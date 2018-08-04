"use strict";
var miFuncion1 = function (a) {
    return a;
};
var miFuncion1F = function (a) { return a; };
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; };
console.log(miFuncion1("Normal"));
console.log(miFuncion1F("Flecha"));
console.log(miFuncion2(5, 9));
console.log(miFuncion2F(5, 9));
var hulk = {
    nombre: "Hulk",
    aplastar: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.nombre + " aplasta!");
        }, 1500);
    }
};
hulk.aplastar();
